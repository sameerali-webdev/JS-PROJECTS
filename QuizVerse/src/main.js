import "./style.css";
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Multi Language",
      "Hyperlinks Text Mark Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },

  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    correctAnswer: "CSS",
  },

  {
    question: "Which language is used to make websites interactive?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correctAnswer: "JavaScript",
  },

  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    correctAnswer: "Netscape",
  },

  {
    question: "Which method is used to select an element by id?",
    options: [
      "querySelectorAll()",
      "getElementById()",
      "getElementsByClassName()",
      "createElement()",
    ],
    correctAnswer: "getElementById()",
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    correctAnswer: "//",
  },

  {
    question: "Which array method creates a new array?",
    options: ["forEach()", "push()", "map()", "pop()"],
    correctAnswer: "map()",
  },

  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },

  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "define"],
    correctAnswer: "const",
  },

  {
    question: "Which HTML tag is used to create a button?",
    options: ["<btn>", "<button>", "<input>", "<click>"],
    correctAnswer: "<button>",
  },
];

let currentQuestion = 0;
let currentcount = currentQuestion + 1;
let selectedAnswer;

let Score = 0;

const Question = document.querySelector(".question");
const Questionn = document.querySelector(".questionn");
const Questionnn = document.querySelector(".questionnn");

const Options = document.querySelectorAll(".option");
const optionn = document.querySelectorAll(".optionn");
const counts = document.querySelectorAll(".count");

const nexts = document.querySelectorAll(".Next");

function GetQuestions() {
  Question.textContent = questions[currentQuestion].question;
  Questionn.textContent = questions[currentQuestion].question;
  Questionnn.textContent = questions[currentQuestion].question;

  Options.forEach((Option, index) => {
    Option.textContent = questions[currentQuestion].options[index];
  });

  optionn.forEach((Option, index) => {
    Option.textContent = questions[currentQuestion].options[index];
  });

  counts.forEach((count) => {
    if (currentcount <= 10) {
      count.textContent = `Question ${currentcount} of 10`;
    }
  });

  const fill = document.querySelectorAll(".fill");
  fill.forEach((fil) => {
    if (fil.textContent != "100%") {
      fil.textContent = `${(currentcount / questions.length) * 100}%`;
    }
  });

  const progress = document.querySelectorAll(".progress");
  progress.forEach((progres) => {
    if (progres.style.width != "100%") {
      progres.style.width = `${(currentcount / questions.length) * 100}%`;
    }
  });
  currentcount++;
}
GetQuestions();

Options.forEach((option) => {
  option.addEventListener("click", function () {
    selectedAnswer = option.textContent;

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      option.style.border = "2px solid green";
      Score++;
      const scores = document.querySelector("#scores");
      scores.textContent = Score;
    } else {
      option.style.border = "2px solid red";
    }
  });
});

optionn.forEach((option) => {
  option.addEventListener("click", function () {
    let selectedAnswer = option.textContent;
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      window.alert("Your answer is right");

      Score++;
      const scores = document.querySelector("#scor");
      scores.textContent = Score;
    } else {
      window.alert("Your answer is wrong");
    }
  });
});

nexts.forEach((next) => {
  next.addEventListener("click", function () {
    currentQuestion++;
    GetQuestions();
  });
});
