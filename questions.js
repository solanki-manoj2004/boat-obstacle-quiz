const questions = [
  {
    id: 1,
    level: 1,
    question: "A crab has 8 legs. How many legs do 3 crabs have?",
    type: "mcq",
    options: {
      A: "18",
      B: "21",
      C: "24",
      D: "32"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 2,
    level: 1,
    question: "Which planet is known as the Red Planet?",
    type: "mcq",
    options: {
      A: "Venus",
      B: "Mars",
      C: "Jupiter",
      D: "Mercury"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 3,
    level: 1,
    question: "What is 15% of 200?",
    type: "mcq",
    options: {
      A: "15",
      B: "20",
      C: "30",
      D: "45"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 4,
    level: 1,
    question: "Which gas do humans need for respiration?",
    type: "mcq",
    options: {
      A: "Carbon dioxide",
      B: "Oxygen",
      C: "Nitrogen",
      D: "Hydrogen"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 5,
    level: 1,
    question: "What is the capital of Japan?",
    type: "mcq",
    options: {
      A: "Seoul",
      B: "Beijing",
      C: "Tokyo",
      D: "Bangkok"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 6,
    level: 1,
    question: "A boat travels 10 km east, then 4 km west. How far east of its start is it?",
    type: "mcq",
    options: {
      A: "4 km",
      B: "6 km",
      C: "10 km",
      D: "14 km"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 7,
    level: 1,
    question: "What is the chemical formula for water?",
    type: "mcq",
    options: {
      A: "CO₂",
      B: "H₂O",
      C: "O₂",
      D: "NaCl"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 8,
    level: 1,
    question: "Which instrument measures temperature?",
    type: "mcq",
    options: {
      A: "Barometer",
      B: "Thermometer",
      C: "Ammeter",
      D: "Compass"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 9,
    level: 1,
    question: "What comes next: 2, 4, 6, 8, __?",
    type: "mcq",
    options: {
      A: "9",
      B: "10",
      C: "12",
      D: "16"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 10,
    level: 1,
    question: "Which ocean is the largest on Earth?",
    type: "mcq",
    options: {
      A: "Atlantic",
      B: "Indian",
      C: "Arctic",
      D: "Pacific"
    },
    correctAnswer: "D",
    timeLimit: 30
  },
  {
    id: 11,
    level: 2,
    question: "A boat has 12 life jackets and 5 are used. How many remain?",
    type: "mcq",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 12,
    level: 2,
    question: "Which part of a plant usually absorbs water from soil?",
    type: "mcq",
    options: {
      A: "Flower",
      B: "Leaf",
      C: "Root",
      D: "Stem"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 13,
    level: 2,
    question: "What is the value of 9²?",
    type: "mcq",
    options: {
      A: "18",
      B: "72",
      C: "81",
      D: "99"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 14,
    level: 2,
    question: "Which of these is a mammal?",
    type: "mcq",
    options: {
      A: "Shark",
      B: "Dolphin",
      C: "Octopus",
      D: "Tuna"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 15,
    level: 2,
    question: "At sea level, water boils at approximately:",
    type: "mcq",
    options: {
      A: "0°C",
      B: "50°C",
      C: "100°C",
      D: "150°C"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 16,
    level: 2,
    question: "If A=1, B=2, C=3, what is the value of SEA (S=19, E=5, A=1)?",
    type: "mcq",
    options: {
      A: "24",
      B: "25",
      C: "26",
      D: "27"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 17,
    level: 2,
    question: "Which direction is opposite to north-east?",
    type: "mcq",
    options: {
      A: "South-east",
      B: "North-west",
      C: "South-west",
      D: "East"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 18,
    level: 2,
    question: "A fair coin is tossed once. What is the chance of heads?",
    type: "mcq",
    options: {
      A: "1/4",
      B: "1/3",
      C: "1/2",
      D: "1"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 19,
    level: 2,
    question: "Which is the smallest prime number?",
    type: "mcq",
    options: {
      A: "0",
      B: "1",
      C: "2",
      D: "3"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 20,
    level: 2,
    question: "What force pulls objects toward Earth?",
    type: "mcq",
    options: {
      A: "Friction",
      B: "Magnetism",
      C: "Gravity",
      D: "Buoyancy"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 21,
    level: 3,
    question: "A boat covers 36 km in 3 hours. What is its average speed?",
    type: "mcq",
    options: {
      A: "9 km/h",
      B: "12 km/h",
      C: "18 km/h",
      D: "108 km/h"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 22,
    level: 3,
    question: "Solve: 2x + 5 = 17.",
    type: "mcq",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "11"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 23,
    level: 3,
    question: "Which pH value is acidic?",
    type: "mcq",
    options: {
      A: "2",
      B: "7",
      C: "9",
      D: "12"
    },
    correctAnswer: "A",
    timeLimit: 30
  },
  {
    id: 24,
    level: 3,
    question: "How many chambers does a human heart have?",
    type: "mcq",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 25,
    level: 3,
    question: "A rectangle is 8 m long and 3 m wide. What is its area?",
    type: "mcq",
    options: {
      A: "11 m²",
      B: "22 m²",
      C: "24 m²",
      D: "48 m²"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 26,
    level: 3,
    question: "Which logic gate outputs 1 only when both inputs are 1?",
    type: "mcq",
    options: {
      A: "OR",
      B: "AND",
      C: "NOT",
      D: "XOR"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 27,
    level: 3,
    question: "What is the main gas in Earth’s atmosphere?",
    type: "mcq",
    options: {
      A: "Oxygen",
      B: "Carbon dioxide",
      C: "Nitrogen",
      D: "Argon"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 28,
    level: 3,
    question: "A sequence goes 3, 6, 12, 24, __. What is next?",
    type: "mcq",
    options: {
      A: "30",
      B: "36",
      C: "48",
      D: "60"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 29,
    level: 3,
    question: "Which material is attracted strongly to a magnet?",
    type: "mcq",
    options: {
      A: "Wood",
      B: "Glass",
      C: "Iron",
      D: "Plastic"
    },
    correctAnswer: "C",
    timeLimit: 30
  },
  {
    id: 30,
    level: 3,
    question: "How many degrees are in a right angle?",
    type: "mcq",
    options: {
      A: "45°",
      B: "90°",
      C: "180°",
      D: "360°"
    },
    correctAnswer: "B",
    timeLimit: 30
  },
  {
    id: 31,
    level: 4,
    question: "A boat moves at 8 km/h for 2.5 hours. How far does it travel?",
    type: "mcq",
    options: {
      A: "10 km",
      B: "16 km",
      C: "20 km",
      D: "24 km"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 32,
    level: 4,
    question: "What is the midpoint of (2, 4) and (8, 10)?",
    type: "mcq",
    options: {
      A: "(3, 7)",
      B: "(5, 7)",
      C: "(5, 6)",
      D: "(10, 14)"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 33,
    level: 4,
    question: "Two identical lamps are connected in parallel. One burns out. Ideally, what happens to the other?",
    type: "mcq",
    options: {
      A: "It also goes out",
      B: "It becomes dimmer",
      C: "It stays lit at the same voltage",
      D: "It doubles its voltage"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 34,
    level: 4,
    question: "Which particle has a negative electric charge?",
    type: "mcq",
    options: {
      A: "Proton",
      B: "Neutron",
      C: "Electron",
      D: "Nucleus"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 35,
    level: 4,
    question: "A group has 20 sailors; 12 know swimming and 5 of those also know first aid. How many swimmers do not know first aid?",
    type: "mcq",
    options: {
      A: "5",
      B: "7",
      C: "12",
      D: "17"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 36,
    level: 4,
    question: "What is the derivative of x² with respect to x?",
    type: "mcq",
    options: {
      A: "x",
      B: "2x",
      C: "x²",
      D: "2"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 37,
    level: 4,
    question: "Which blood cells mainly carry oxygen?",
    type: "mcq",
    options: {
      A: "White blood cells",
      B: "Red blood cells",
      C: "Platelets",
      D: "Plasma cells"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 38,
    level: 4,
    question: "In Python, which keyword defines a function?",
    type: "mcq",
    options: {
      A: "func",
      B: "define",
      C: "def",
      D: "function"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 39,
    level: 4,
    question: "A 5 Ω resistor has 10 V across it. What current flows?",
    type: "mcq",
    options: {
      A: "0.5 A",
      B: "2 A",
      C: "5 A",
      D: "50 A"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 40,
    level: 4,
    question: "What is the sum of the interior angles of a triangle?",
    type: "mcq",
    options: {
      A: "90°",
      B: "180°",
      C: "270°",
      D: "360°"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 41,
    level: 5,
    question: "A right triangle has legs 6 cm and 8 cm. What is its hypotenuse?",
    type: "mcq",
    options: {
      A: "7 cm",
      B: "10 cm",
      C: "12 cm",
      D: "14 cm"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 42,
    level: 5,
    question: "How many distinct arrangements can be made from the letters A, B, C?",
    type: "mcq",
    options: {
      A: "3",
      B: "6",
      C: "9",
      D: "27"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 43,
    level: 5,
    question: "A solution has [H⁺] = 10⁻³ mol/L. What is its pH?",
    type: "mcq",
    options: {
      A: "2",
      B: "3",
      C: "7",
      D: "11"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 44,
    level: 5,
    question: "A 2 kg object accelerates at 3 m/s². What net force acts on it?",
    type: "mcq",
    options: {
      A: "1.5 N",
      B: "5 N",
      C: "6 N",
      D: "9 N"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 45,
    level: 5,
    question: "A fair six-sided die is rolled. What is the probability of getting a number greater than 4?",
    type: "mcq",
    options: {
      A: "1/6",
      B: "1/3",
      C: "1/2",
      D: "2/3"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 46,
    level: 5,
    question: "Which Python expression reverses the string s directly?",
    type: "mcq",
    options: {
      A: "s.reverse()",
      B: "s[::-1]",
      C: "reverse(s)",
      D: "s[-1:0]"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 47,
    level: 5,
    question: "What is the chemical name of NaCl?",
    type: "mcq",
    options: {
      A: "Sodium carbonate",
      B: "Sodium chloride",
      C: "Calcium chloride",
      D: "Sodium hydroxide"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 48,
    level: 5,
    question: "A line has slope 2 and passes through (0, 3). What is y when x=4?",
    type: "mcq",
    options: {
      A: "5",
      B: "8",
      C: "11",
      D: "14"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 49,
    level: 5,
    question: "Which law says that current equals voltage divided by resistance?",
    type: "mcq",
    options: {
      A: "Newton’s law",
      B: "Ohm’s law",
      C: "Faraday’s law",
      D: "Hooke’s law"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 50,
    level: 5,
    question: "What is the next number: 2, 6, 12, 20, 30, __?",
    type: "mcq",
    options: {
      A: "36",
      B: "40",
      C: "42",
      D: "48"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 51,
    level: 6,
    question: "A boat’s speed rises from 4 m/s to 16 m/s in 6 s. What is its average acceleration?",
    type: "mcq",
    options: {
      A: "2 m/s²",
      B: "3 m/s²",
      C: "4 m/s²",
      D: "12 m/s²"
    },
    correctAnswer: "A",
    timeLimit: 45
  },
  {
    id: 52,
    level: 6,
    question: "How many ways can a team of 2 be chosen from 6 people?",
    type: "mcq",
    options: {
      A: "12",
      B: "15",
      C: "30",
      D: "36"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 53,
    level: 6,
    question: "A 12 V battery is connected to a 4 Ω resistor. What is the power dissipated?",
    type: "mcq",
    options: {
      A: "3 W",
      B: "16 W",
      C: "36 W",
      D: "48 W"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 54,
    level: 6,
    question: "Which molecule has a trigonal planar shape?",
    type: "mcq",
    options: {
      A: "H₂O",
      B: "NH₃",
      C: "BF₃",
      D: "CH₄"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 55,
    level: 6,
    question: "If 75% of a substance has decomposed, what fraction remains?",
    type: "mcq",
    options: {
      A: "1/4",
      B: "1/3",
      C: "1/2",
      D: "3/4"
    },
    correctAnswer: "A",
    timeLimit: 45
  },
  {
    id: 56,
    level: 6,
    question: "A circle has radius 7 cm. Using π = 22/7, what is its circumference?",
    type: "mcq",
    options: {
      A: "22 cm",
      B: "44 cm",
      C: "49 cm",
      D: "154 cm"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 57,
    level: 6,
    question: "In C++, which symbol commonly ends a statement?",
    type: "mcq",
    options: {
      A: ":",
      B: ";",
      C: ".",
      D: ","
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 58,
    level: 6,
    question: "A box slides to a stop due to friction. The work done by friction is:",
    type: "mcq",
    options: {
      A: "Positive",
      B: "Negative",
      C: "Always zero",
      D: "Infinite"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 59,
    level: 6,
    question: "If 3x − 7 = 11, what is x?",
    type: "mcq",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 60,
    level: 6,
    question: "Which process allows plants to convert light energy into chemical energy?",
    type: "mcq",
    options: {
      A: "Respiration",
      B: "Photosynthesis",
      C: "Fermentation",
      D: "Transpiration"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 61,
    level: 7,
    question: "A 3 Ω and 6 Ω resistor are connected in parallel. What is their equivalent resistance?",
    type: "mcq",
    options: {
      A: "2 Ω",
      B: "3 Ω",
      C: "4.5 Ω",
      D: "9 Ω"
    },
    correctAnswer: "A",
    timeLimit: 45
  },
  {
    id: 62,
    level: 7,
    question: "A committee of 3 is chosen from 5 people. How many committees are possible?",
    type: "mcq",
    options: {
      A: "10",
      B: "15",
      C: "20",
      D: "60"
    },
    correctAnswer: "A",
    timeLimit: 45
  },
  {
    id: 63,
    level: 7,
    question: "For f(x)=x³, what is f′(2)?",
    type: "mcq",
    options: {
      A: "6",
      B: "8",
      C: "12",
      D: "16"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 64,
    level: 7,
    question: "A 0.5 kg ball moves at 4 m/s. What is its kinetic energy?",
    type: "mcq",
    options: {
      A: "2 J",
      B: "4 J",
      C: "8 J",
      D: "16 J"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 65,
    level: 7,
    question: "Which element has atomic number 11?",
    type: "mcq",
    options: {
      A: "Magnesium",
      B: "Sodium",
      C: "Neon",
      D: "Aluminium"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 66,
    level: 7,
    question: "A 10 m ladder leans against a wall; its foot is 6 m from the wall. How high does it reach?",
    type: "mcq",
    options: {
      A: "4 m",
      B: "6 m",
      C: "8 m",
      D: "16 m"
    },
    correctAnswer: "C",
    timeLimit: 45
  },
  {
    id: 67,
    level: 7,
    question: "In a balanced Wheatstone bridge, the current through the galvanometer is ideally:",
    type: "mcq",
    options: {
      A: "Zero",
      B: "Maximum",
      C: "Equal to battery current",
      D: "Infinite"
    },
    correctAnswer: "A",
    timeLimit: 45
  },
  {
    id: 68,
    level: 7,
    question: "A function call foo(1) then foo(2) uses a shared default list that appends each input. What does the second call return?",
    type: "mcq",
    options: {
      A: "[2]",
      B: "[1, 2]",
      C: "[1]",
      D: "Error always"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 69,
    level: 7,
    question: "If two currents in parallel wires flow in opposite directions, the wires:",
    type: "mcq",
    options: {
      A: "Attract",
      B: "Repel",
      C: "Have no force",
      D: "Melt instantly"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 70,
    level: 7,
    question: "In a group of 40, 24 like sailing, 19 like diving, and 8 like both. How many like at least one?",
    type: "mcq",
    options: {
      A: "27",
      B: "35",
      C: "40",
      D: "43"
    },
    correctAnswer: "B",
    timeLimit: 45
  },
  {
    id: 71,
    level: 8,
    question: "A projectile’s horizontal speed is 12 m/s and vertical speed at the peak is zero. What is its speed at the peak?",
    type: "mcq",
    options: {
      A: "0 m/s",
      B: "6 m/s",
      C: "12 m/s",
      D: "Cannot tell"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 72,
    level: 8,
    question: "How many 4-digit codes can be made from digits 1–5 without repetition?",
    type: "mcq",
    options: {
      A: "20",
      B: "60",
      C: "120",
      D: "625"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 73,
    level: 8,
    question: "For an ideal gas at constant temperature, pressure doubles. Its volume:",
    type: "mcq",
    options: {
      A: "Doubles",
      B: "Halves",
      C: "Quadruples",
      D: "Stays the same"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 74,
    level: 8,
    question: "A 100 W lamp runs for 3 hours. How much energy does it use?",
    type: "mcq",
    options: {
      A: "0.03 kWh",
      B: "0.3 kWh",
      C: "3 kWh",
      D: "300 kWh"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 75,
    level: 8,
    question: "What is the value of 1 + 2 + … + 20?",
    type: "mcq",
    options: {
      A: "200",
      B: "210",
      C: "220",
      D: "400"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 76,
    level: 8,
    question: "A capacitor is charged through a resistor. After one time constant, it reaches about what percentage of its final charge?",
    type: "mcq",
    options: {
      A: "37%",
      B: "50%",
      C: "63%",
      D: "100%"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 77,
    level: 8,
    question: "Which sorting algorithm repeatedly selects the smallest remaining item and places it next?",
    type: "mcq",
    options: {
      A: "Merge sort",
      B: "Selection sort",
      C: "Binary search",
      D: "Hashing"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 78,
    level: 8,
    question: "For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure at constant temperature shifts equilibrium toward:",
    type: "mcq",
    options: {
      A: "Reactants",
      B: "Products",
      C: "Neither side",
      D: "Higher temperature"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 79,
    level: 8,
    question: "A circle is x² + y² = 169. What is its radius?",
    type: "mcq",
    options: {
      A: "13",
      B: "26",
      C: "169",
      D: "√1690"
    },
    correctAnswer: "A",
    timeLimit: 60
  },
  {
    id: 80,
    level: 8,
    question: "A boat travels 30 km downstream in 2 h and the same distance upstream in 3 h. What is the downstream speed minus upstream speed?",
    type: "mcq",
    options: {
      A: "2 km/h",
      B: "5 km/h",
      C: "15 km/h",
      D: "30 km/h"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 81,
    level: 9,
    question: "A fair coin is tossed 3 times. What is the probability of exactly 2 heads?",
    type: "mcq",
    options: {
      A: "1/8",
      B: "3/8",
      C: "1/2",
      D: "3/4"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 82,
    level: 9,
    question: "A mass is doubled and its speed is tripled. Its kinetic energy becomes how many times the original?",
    type: "mcq",
    options: {
      A: "5",
      B: "6",
      C: "9",
      D: "18"
    },
    correctAnswer: "D",
    timeLimit: 60
  },
  {
    id: 83,
    level: 9,
    question: "A 2 mol ideal gas occupies 10 L. At the same temperature and pressure, what volume would 5 mol occupy?",
    type: "mcq",
    options: {
      A: "4 L",
      B: "10 L",
      C: "20 L",
      D: "25 L"
    },
    correctAnswer: "D",
    timeLimit: 60
  },
  {
    id: 84,
    level: 9,
    question: "For a first-order reaction, 87.5% decomposes in 60 minutes. What is its half-life?",
    type: "mcq",
    options: {
      A: "10 min",
      B: "20 min",
      C: "30 min",
      D: "40 min"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 85,
    level: 9,
    question: "How many distinct arrangements are there of the letters in LEVEL?",
    type: "mcq",
    options: {
      A: "20",
      B: "30",
      C: "60",
      D: "120"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 86,
    level: 9,
    question: "If vectors A and B are perpendicular, A·B equals:",
    type: "mcq",
    options: {
      A: "|A||B|",
      B: "1",
      C: "0",
      D: "−1"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 87,
    level: 9,
    question: "Which is a universal logic gate?",
    type: "mcq",
    options: {
      A: "XOR",
      B: "NAND",
      C: "Buffer",
      D: "XNOR"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 88,
    level: 9,
    question: "A cell has E°(Cu²⁺/Cu)=+0.34 V and E°(Zn²⁺/Zn)=−0.76 V. What is E°cell for Zn/Cu?",
    type: "mcq",
    options: {
      A: "0.42 V",
      B: "0.76 V",
      C: "1.10 V",
      D: "1.52 V"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 89,
    level: 9,
    question: "The distance between (−2, 1) and (4, 9) is:",
    type: "mcq",
    options: {
      A: "8",
      B: "10",
      C: "12",
      D: "14"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 90,
    level: 9,
    question: "At the highest point of a projectile’s path (ignoring air resistance), which quantity is zero?",
    type: "mcq",
    options: {
      A: "Horizontal velocity",
      B: "Vertical velocity",
      C: "Acceleration due to gravity",
      D: "Total energy"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 91,
    level: 10,
    question: "A boat’s position is given by 2x + y = 7 and x − y = 2. What is (x, y)?",
    type: "mcq",
    options: {
      A: "(2, 3)",
      B: "(3, 1)",
      C: "(1, 3)",
      D: "(4, −1)"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 92,
    level: 10,
    question: "A 5-character password uses A–E and digits 1–3 without repetition. It has exactly 2 digits and ends in an odd digit. How many passwords are possible?",
    type: "mcq",
    options: {
      A: "480",
      B: "720",
      C: "960",
      D: "1,200"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 93,
    level: 10,
    question: "A capacitor stays connected to a fixed-voltage battery while plate separation doubles. For ideal parallel plates, stored energy:",
    type: "mcq",
    options: {
      A: "Doubles",
      B: "Halves",
      C: "Quadruples",
      D: "Stays unchanged"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 94,
    level: 10,
    question: "A proton and an alpha particle enter the same magnetic field perpendicularly with equal kinetic energy. The alpha particle has twice the charge and four times the mass. Its orbit radius is:",
    type: "mcq",
    options: {
      A: "Half the proton’s",
      B: "Equal to the proton’s",
      C: "Twice the proton’s",
      D: "Four times the proton’s"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 95,
    level: 10,
    question: "For H₂ + I₂ ⇌ 2HI, [H₂]=0.2 M, [I₂]=0.2 M, [HI]=0.8 M. What is Kc?",
    type: "mcq",
    options: {
      A: "4",
      B: "8",
      C: "16",
      D: "20"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 96,
    level: 10,
    question: "A fair die is rolled twice. What is the probability that the sum is 7?",
    type: "mcq",
    options: {
      A: "1/12",
      B: "1/6",
      C: "1/4",
      D: "1/3"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
  {
    id: 97,
    level: 10,
    question: "A uniform solid sphere’s gravitational force inside it, at distance r from its centre, is proportional to:",
    type: "mcq",
    options: {
      A: "1/r²",
      B: "1/r",
      C: "r",
      D: "r²"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 98,
    level: 10,
    question: "A function is f(x)=x²−4x+7. What is its minimum value over real x?",
    type: "mcq",
    options: {
      A: "−1",
      B: "2",
      C: "3",
      D: "7"
    },
    correctAnswer: "C",
    timeLimit: 60
  },
  {
    id: 99,
    level: 10,
    question: "A 240 V to 12 V ideal transformer supplies 24 W. What is the equivalent load resistance referred to the 240 V primary?",
    type: "mcq",
    options: {
      A: "12 Ω",
      B: "120 Ω",
      C: "1,200 Ω",
      D: "2,400 Ω"
    },
    correctAnswer: "D",
    timeLimit: 60
  },
  {
    id: 100,
    level: 10,
    question: "Three switches outside a room control one bulb inside. You may enter once; the bulb warms when lit. Which strategy identifies the switch?",
    type: "mcq",
    options: {
      A: "Turn all switches on",
      B: "Turn switch 1 on for a while, off; switch 2 on; then enter",
      C: "Flip all switches rapidly",
      D: "Impossible"
    },
    correctAnswer: "B",
    timeLimit: 60
  },
];

module.exports = questions;
