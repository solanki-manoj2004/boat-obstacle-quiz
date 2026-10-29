
const express = require("express");
const path = require("path");
const crypto = require("crypto");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const QR_COUNT = 10;
const QUESTIONS_PER_QR = 10;
const DEFAULT_TIME_LIMIT = 30;

// Load questions.js fresh whenever we need a question.
function loadQuestions() {
  const questionsPath = require.resolve("./questions.js");
  delete require.cache[questionsPath];

  const questions = require(questionsPath);

  if (!Array.isArray(questions)) {
    throw new Error(
      "questions.js must export an array using module.exports = questions;"
    );
  }

  return questions;
}

function getFirstQuestion(qrId) {
  return (qrId - 1) * QUESTIONS_PER_QR + 1;
}

function getLastQuestion(qrId) {
  return qrId * QUESTIONS_PER_QR;
}

function getNextQuestion(qrId, currentQuestion) {
  if (currentQuestion >= getLastQuestion(qrId)) {
    return getFirstQuestion(qrId);
  }

  return currentQuestion + 1;
}

function getQuestion(qrId, questionNumber) {
  const id = Number(questionNumber);

  if (
    !Number.isInteger(id) ||
    id < getFirstQuestion(qrId) ||
    id > getLastQuestion(qrId)
  ) {
    console.error(`Invalid question ID ${id} for QR ${qrId}`);
    return null;
  }

  try {
    const questions = loadQuestions();
    const question = questions.find(
      item => Number(item.id) === id
    );

    if (!question) {
      console.error("Question lookup failed.");
      console.error("Questions file:", require.resolve("./questions.js"));
      console.error("Requested ID:", id);
      console.error("Loaded question count:", questions.length);
      console.error(
        "Available IDs:",
        questions.map(item => item.id).join(", ")
      );
    }

    return question || null;
  } catch (error) {
    console.error("Error loading questions.js:", error);
    return null;
  }
}

// Initialize database without resetting existing progress.
async function setupDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS qr_progress (
      qr_id INTEGER PRIMARY KEY,
      current_question INTEGER NOT NULL,
      is_locked BOOLEAN NOT NULL DEFAULT FALSE,
      lock_expires_at TIMESTAMPTZ,
      question_started_at TIMESTAMPTZ,
      active_token TEXT,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await pool.query(`
    ALTER TABLE qr_progress
    ADD COLUMN IF NOT EXISTS lock_expires_at TIMESTAMPTZ
  `);

  await pool.query(`
    ALTER TABLE qr_progress
    ADD COLUMN IF NOT EXISTS question_started_at TIMESTAMPTZ
  `);

  await pool.query(`
    ALTER TABLE qr_progress
    ADD COLUMN IF NOT EXISTS active_token TEXT
  `);

  for (let qrId = 1; qrId <= QR_COUNT; qrId++) {
    await pool.query(
      `INSERT INTO qr_progress (qr_id, current_question)
       VALUES ($1, $2)
       ON CONFLICT (qr_id) DO NOTHING`,
      [qrId, getFirstQuestion(qrId)]
    );
  }

  console.log("Database setup complete.");

  // Check the questions file during startup.
  const questions = loadQuestions();
  console.log("Questions file:", require.resolve("./questions.js"));
  console.log("Total questions loaded:", questions.length);
  console.log(
    "Missing question IDs:",
    Array.from({ length: 100 }, (_, i) => i + 1)
      .filter(id => !questions.some(q => Number(q.id) === id))
  );
}

// Serve quiz page.
app.get("/quiz/:qrId", (req, res) => {
  const qrId = Number(req.params.qrId);

  if (!Number.isInteger(qrId) || qrId < 1 || qrId > QR_COUNT) {
    return res.status(404).send("Invalid QR checkpoint.");
  }

  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Scan QR and load current question.
app.post("/api/qr/:qrId/scan", async (req, res) => {
  const qrId = Number(req.params.qrId);

  if (!Number.isInteger(qrId) || qrId < 1 || qrId > QR_COUNT) {
    return res.status(400).json({ error: "Invalid QR code." });
  }

  let client;

  try {
    client = await pool.connect();
    await client.query("BEGIN");

    const result = await client.query(
      `SELECT *
       FROM qr_progress
       WHERE qr_id = $1
       FOR UPDATE`,
      [qrId]
    );

    const progress = result.rows[0];

    if (!progress) {
      await client.query("ROLLBACK");
      return res.status(404).json({
        error: "QR checkpoint not found."
      });
    }

    // If the previous participant's lock expired, advance the question.
    if (progress.is_locked) {
      const expiry = progress.lock_expires_at
        ? new Date(progress.lock_expires_at).getTime()
        : 0;

      if (expiry > Date.now()) {
        await client.query("ROLLBACK");

        return res.status(409).json({
          error: "This checkpoint is currently in use. Please wait."
        });
      }

      const nextQuestion = getNextQuestion(
        qrId,
        progress.current_question
      );

      await client.query(
        `UPDATE qr_progress
         SET current_question = $2,
             is_locked = FALSE,
             active_token = NULL,
             question_started_at = NULL,
             lock_expires_at = NULL,
             updated_at = NOW()
         WHERE qr_id = $1`,
        [qrId, nextQuestion]
      );

      progress.current_question = nextQuestion;
    }

    const question = getQuestion(
      qrId,
      progress.current_question
    );

    if (!question) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        error: `Question ${progress.current_question} is missing. Check the server terminal for question-loading details.`
      });
    }

    const timeLimit =
      Number(question.timeLimit) || DEFAULT_TIME_LIMIT;

    const token = crypto.randomUUID();

    await client.query(
      `UPDATE qr_progress
       SET is_locked = TRUE,
           active_token = $2,
           question_started_at = NOW(),
           lock_expires_at = NOW() + ($3 * INTERVAL '1 second'),
           updated_at = NOW()
       WHERE qr_id = $1`,
      [qrId, token, timeLimit]
    );

    await client.query("COMMIT");

    // Do not send the correct answer to the browser.
    const { correctAnswer, ...publicQuestion } = question;

    return res.json({
      qrId,
      question: publicQuestion,
      timeLimit,
      token
    });
  } catch (error) {
    if (client) {
      try {
        await client.query("ROLLBACK");
      } catch (_) {}
    }

    console.error("Scan error:", error);

    return res.status(500).json({
      error: "Could not load question."
    });
  } finally {
    if (client) client.release();
  }
});

// Submit answer or handle timeout.
app.post("/api/qr/:qrId/finish", async (req, res) => {
  const qrId = Number(req.params.qrId);
  const { answer, timedOut, token } = req.body;

  if (!Number.isInteger(qrId) || qrId < 1 || qrId > QR_COUNT) {
    return res.status(400).json({ error: "Invalid QR code." });
  }

  if (typeof token !== "string" || !token) {
    return res.status(401).json({
      error: "Missing session token. Please scan again."
    });
  }

  let client;

  try {
    client = await pool.connect();
    await client.query("BEGIN");

    const result = await client.query(
      `SELECT *
       FROM qr_progress
       WHERE qr_id = $1
       FOR UPDATE`,
      [qrId]
    );

    const progress = result.rows[0];

    if (
      !progress ||
      !progress.is_locked ||
      !progress.question_started_at ||
      progress.active_token !== token
    ) {
      await client.query("ROLLBACK");

      return res.status(409).json({
        error: "Your session is no longer active. Please scan again."
      });
    }

    const question = getQuestion(
      qrId,
      progress.current_question
    );

    if (!question) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        error: "Question not found. Check the server terminal."
      });
    }

    const elapsedResult = await client.query(
      `SELECT EXTRACT(
         EPOCH FROM (NOW() - $1::timestamptz)
       ) AS seconds`,
      [progress.question_started_at]
    );

    const elapsedSeconds = Number(elapsedResult.rows[0].seconds);
    const timeLimit =
      Number(question.timeLimit) || DEFAULT_TIME_LIMIT;

    const timeExpired = elapsedSeconds >= timeLimit;

    if (timeExpired || timedOut === true) {
      if (!timeExpired) {
        await client.query("ROLLBACK");

        return res.status(400).json({
          error: "The question timer has not expired yet."
        });
      }

      const nextQuestion = getNextQuestion(
        qrId,
        progress.current_question
      );

      await client.query(
        `UPDATE qr_progress
         SET current_question = $2,
             is_locked = FALSE,
             active_token = NULL,
             question_started_at = NULL,
             lock_expires_at = NULL,
             updated_at = NOW()
         WHERE qr_id = $1`,
        [qrId, nextQuestion]
      );

      await client.query("COMMIT");

      return res.status(408).json({
        message: "TIME FINISHED!",
        timedOut: true
      });
    }

    const isCorrect =
      typeof answer === "string" &&
      answer.toUpperCase() ===
        String(question.correctAnswer).toUpperCase();

    const nextQuestion = getNextQuestion(
      qrId,
      progress.current_question
    );

    await client.query(
      `UPDATE qr_progress
       SET current_question = $2,
           is_locked = FALSE,
           active_token = NULL,
           question_started_at = NULL,
           lock_expires_at = NULL,
           updated_at = NOW()
       WHERE qr_id = $1`,
      [qrId, nextQuestion]
    );

    await client.query("COMMIT");

    return res.json({
      message: "Question completed.",
      timedOut: false,
      correct: isCorrect,
      correctAnswer: question.correctAnswer
    });
  } catch (error) {
    if (client) {
      try {
        await client.query("ROLLBACK");
      } catch (_) {}
    }

    console.error("Finish error:", error);

    return res.status(500).json({
      error: "Could not finish question."
    });
  } finally {
    if (client) client.release();
  }
});

// Check database connection.
app.get("/api/status", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(*)::int AS count FROM qr_progress"
    );

    res.json({
      database: "connected",
      checkpoints: result.rows[0].count
    });
  } catch (error) {
    console.error("Status error:", error);
    res.status(500).json({ database: "disconnected" });
  }
});

// Start server after database setup.
async function startServer() {
  try {
    await setupDatabase();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
