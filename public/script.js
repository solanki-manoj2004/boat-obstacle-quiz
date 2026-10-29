let sessionToken = null;

const loading = document.getElementById("loading");
const statusText = document.getElementById("status");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const checkpoint = document.getElementById("checkpoint");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const timerText = document.getElementById("timer");
const timerArea = document.getElementById("timerArea");

const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const resultIcon = document.getElementById("resultIcon");
const confettiLayer = document.getElementById("confettiLayer");
const resultPanel = document.getElementById("result");

// Read URLs such as /quiz/1 or /quiz/10.
const match = window.location.pathname.match(/^\/quiz\/(\d+)\/?$/);
const qrId = match ? Number(match[1]) : null;

let selectedAnswer = null;
let timerInterval = null;
let timeLeft = 0;
let questionActive = false;
let submitting = false;

function showResult(title, message, type = "neutral") {
  clearInterval(timerInterval);

  questionActive = false;
  submitting = false;

  quiz.hidden = true;
  loading.hidden = true;
  result.hidden = false;

  resultTitle.textContent = title;
  resultMessage.textContent = message;
  nextBtn.hidden = true;

  resultPanel.classList.remove("success", "failure");
  resultIcon.textContent = "✦";

  if (type === "success") {
    resultPanel.classList.add("success");
    resultIcon.textContent = "✓";
    launchConfetti();
  } else if (type === "failure") {
    resultPanel.classList.add("failure");
    resultIcon.textContent = "!";
  }
}

function startTimer(seconds) {
  clearInterval(timerInterval);

  timeLeft = seconds;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft -= 1;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuestion(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerText.textContent = timeLeft;

  // Highlight the timer when 10 seconds or less remain.
  timerArea.classList.toggle(
    "timer-warning",
    timeLeft <= 10
  );
}

function displayQuestion(data) {
  const q = data.question;

  selectedAnswer = null;
  questionActive = true;
  submitting = false;

  submitBtn.disabled = true;
  submitBtn.querySelector("span").textContent = "SUBMIT ANSWER";

  checkpoint.textContent = `Checkpoint ${qrId}`;
  questionNumber.textContent = `QUESTION ${data.questionNumber || qrId}`;
  questionText.textContent = q.question;

  optionsBox.replaceChildren();

  for (const [key, value] of Object.entries(q.options)) {
    const option = document.createElement("button");

    option.type = "button";
    option.className = "option";
    option.textContent = `${key}. ${value}`;
    option.setAttribute("aria-pressed", "false");

    option.addEventListener("click", () => {
      if (!questionActive || submitting) return;

      selectedAnswer = key;

      for (const item of optionsBox.children) {
        item.classList.remove("selected");
        item.setAttribute("aria-pressed", "false");
      }

      option.classList.add("selected");
      option.setAttribute("aria-pressed", "true");
      submitBtn.disabled = false;
    });

    optionsBox.appendChild(option);
  }

  loading.hidden = true;
  result.hidden = true;
  quiz.hidden = false;

  startTimer(Number(data.timeLimit));
}

async function loadQuestion() {
  if (!qrId || qrId < 1 || qrId > 10) {
    statusText.textContent =
      "Invalid checkpoint. Please scan a valid QR code.";
    return;
  }

  try {
    const response = await fetch(`/api/qr/${qrId}/scan`, {
      method: "POST"
    });

    const data = await response.json();

    if (!response.ok) {
      statusText.textContent =
        data.error || "This checkpoint is unavailable. Please try again.";
      return;
    }

    // Keep the token provided by the existing backend.
    sessionToken = data.token;

    displayQuestion(data);
  } catch (error) {
    statusText.textContent =
      "Unable to connect. Please check your internet connection.";
  }
}

async function finishQuestion(timedOut = false) {
  if (!questionActive || submitting) return;

  submitting = true;
  submitBtn.disabled = true;
  clearInterval(timerInterval);

  // Prevent duplicate submissions while waiting for the server.
  submitBtn.querySelector("span").textContent = "SUBMITTING...";

  try {
    const response = await fetch(`/api/qr/${qrId}/finish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        answer: selectedAnswer,
        timedOut: timedOut,
        token: sessionToken
      })
    });

    const data = await response.json();

    if (response.status === 408 || data.timedOut) {
      showResult(
        "TIME FINISHED!",
        "Your time is over. The next participant can scan this checkpoint.",
        "failure"
      );
      return;
    }

    if (!response.ok) {
      showResult(
        "Unable to submit",
        data.error || "Please contact the event organizer.",
        "neutral"
      );
      return;
    }

    if (data.correct) {
      showResult(
        "Correct!",
        "Well done! Your answer is correct. The next participant can now scan this checkpoint.",
        "success"
      );
    } else {
      showResult(
        "Incorrect!",
        `The correct answer is ${data.correctAnswer || 'unknown'}. The next participant can now scan this checkpoint.`,
        "failure"
      );
    }
  } catch (error) {
    showResult(
      "Connection error",
      "We could not confirm your submission. Please contact the event organizer.",
      "neutral"
    );
  }
}

function launchConfetti() {
  if (!confettiLayer) return;

  confettiLayer.replaceChildren();

  const colors = [
    "#38e8ff",
    "#55f3b1",
    "#ffffff",
    "#66a6ff",
    "#ffd166"
  ];

  // A small celebration without adding an external library.
  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 2}s`;
    piece.style.setProperty(
      "--drift",
      `${(Math.random() - 0.5) * 160}px`
    );

    confettiLayer.appendChild(piece);
  }

  // Remove animation elements after they finish.
  setTimeout(() => {
    confettiLayer.replaceChildren();
  }, 4000);
}

submitBtn.addEventListener("click", () => {
  if (selectedAnswer && questionActive) {
    finishQuestion(false);
  }
});

loadQuestion();