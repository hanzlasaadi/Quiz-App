const quizData = [
  {
    question: "What is the most popular programming language?",
    a: "C++",
    b: "C#",
    c: "JavaScript",
    d: "Assembly",
    correct: "c",
  },
  {
    question: "What is Han's favourite dish?",
    a: "Sushi",
    b: "Biryani",
    c: "Pulao",
    d: "Pizza",
    correct: "a",
  },
  {
    question: "Best actor in the world?",
    a: "Leonardo DiCaprio",
    b: "Brad Pitt",
    c: "Meryl Streep",
    d: "Al Pacino",
    correct: "d",
  },
  {
    question: "Best movie in the world?",
    a: "Shawshank Redemption?",
    b: "12 Angry Men",
    c: "Wolf of Wall Street",
    d: "Parasite",
    correct: "d",
  },
  {
    question: "The most genius person ever to live?",
    a: "Nikola Tesla",
    b: "Newton",
    c: "Elon Musk",
    d: "Einstein",
    correct: "d",
  },
];

const questionText = document.getElementById("question");

const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");

const btn = document.getElementById("submitBtn");

const finished = document.querySelector(".finished");

let currentQuiz = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  const currentQuizData = quizData[currentQuiz];

  questionText.innerHTML = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

const getSelected = function () {
  const radioButtons = document.querySelectorAll(".options");

  let selected = undefined;

  radioButtons.forEach((answer) => {
    if (answer.checked) {
      selected = answer.id;
    }
    answer.checked = false;
  });
  return selected;
};

btn.addEventListener("click", () => {
  const selected = getSelected();

  if (selected) {
    if (selected === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuestion();
    } else {
      // TODO: show results
      finished.classList.remove("hidden");
      btn.classList.add("hidden");
      document.querySelector(".header").classList.add("hidden");
      document.querySelector(".refresh").classList.remove("hidden");

      finished.innerHTML = `
      You have finished\n
      Your total score is ${score}/${quizData.length}`;
    }
  }
});
