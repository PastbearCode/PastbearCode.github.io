const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Michelangelo', 'Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
    answer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the largest mammal on Earth?',
    options: ['Elephant', 'Giraffe', 'Blue whale', 'Hippopotamus'],
    answer: 'Blue whale'
  },
];

let currentQuestion = 0;

function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  
  questionElement.innerText = quizData[currentQuestion].question;
  optionsElement.innerHTML = '';
  
  quizData[currentQuestion].options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  if (selectedOption === quizData[currentQuestion].answer) {
    alert('Correct answer! 🎉');
  } else {
    alert('Wrong answer! 😢');
  }
}

function nextQuestion() {
  currentQuestion++;
  
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    alert('Quiz completed! 🎉');
    currentQuestion = 0;
    showQuestion();
  }
}

showQuestion();
