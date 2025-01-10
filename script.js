const questions= [
    {
        question: "Who is the best friend of Saadia Javed?",
        answers: [
            {text: "Kashif Ali", correct: false},
            {text: "Sadaf Fatima", correct: false},
            {text: "Anam jutt", correct: false},
            {text: "Kashif & Sadaf", correct: true}

        ]
    },
    {
        question: "What is the favourite food of Saadia Javed?",
        answers: [
            {text: "Goolgapy", correct: false},
            {text: "Biryani", correct: false},
            {text: "Biryani & Golgapy", correct: true},
            {text: "Shuwarma", correct: false},

        ]
    },
    {
        question: "What is the go-to comfort activity? of Saadia Javed?",
        answers: [
            {text: "Listening to music", correct: false},
            {text: " Watching TV shows", correct: true},
            {text: " Reading a book", correct: false},
            {text: "Taking a nap", correct: false},

        ]
    },
    {
        question: "What is the dream vacation spot of Saadia Javed?",
        answers: [
            {text: "Paris", correct: false},
            {text: "Maldives", correct: false},
            {text: "New York", correct: false},
            {text: "Switzerland", correct: true},

        ]
    },
    {
        question: "What is the favorite social media platform of Saadia Javed?",
        answers: [
            {text: "Youtube", correct: true},
            {text: "Instagram", correct: false},
            {text: "Ticktok", correct: false},
            {text: "Facebook", correct: false},

        ]
    },
    {
        question: "What is the favorite hobby of Saadia Javed?",
        answers: [
            {text: "Reading", correct: false},
            {text: "Travelling", correct: true},
            {text: "Painting", correct: false},
            {text: "Cooking", correct: false},

        ] 
    },
    {
        question: "What is the zodiac sign of Saadia Javed?",
        answers: [
            {text: "Capricon", correct: false},
            {text: "Libra", correct: false},
            {text: "Aquarius", correct: true},
            {text: " Scorpio", correct: false},

        ] 
    },
    {
        question: "How do Saadia Javed usually express her happiness?",
        answers: [
            {text: "Smiling and laughing", correct: false},
            {text: " Sharing the good news with others", correct: false},
            {text: "Staying calm and relaxed", correct: false},
            {text: "Smiling and laughing & Sharing the good news with others", correct: true},

        ] 
    },
    {
        question: "What makes Saadia Javed feel most loved??",
        answers: [
            {text: "Words of affirmation", correct: false},
            {text: "Spending quality time", correct: false},
            {text: "Acts of kindness", correct: true},
            {text: "Receiving gifts", correct: false},

        ] 
    },
    {
        question: "How do Saadia Javed usually react when she is angry?",
        answers: [
            {text: "Walk away to cool down", correct: false},
            {text: "Stay silent", correct: true},
            {text: "Speak my mind directly", correct: false},
            {text: "Write or journal her thoughts", correct: false},

        ] 
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("ans-buttons");
const nextButton = document.getElementById("next-btn");

let currentQI = 0;
let score = 0;

function startQuiz(){
    currentQI = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
   resetstate();
   let currentQuestion = questions[currentQI];
   let questionNo = currentQI + 1;
   questionElement.innerHTML = questionNo + "." + currentQuestion.question;
   
   currentQuestion.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerButton.appendChild(button);
          if(answer.correct){
             button.dataset.correct = answer.correct;
          }

          button.addEventListener("click", selectAnswer);
});
}

function resetstate() {
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
           if(button.dataset.correct === "true"){
            button.classList.add("correct");
           }
           button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetstate();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.innerHTML.style.display = "block";
}

function handlenextButton(){
    currentQI++;
    if(currentQI < questions.length){
        showQuestion();
}else{
    showScore();
}
}

nextButton.addEventListener("click", () =>{
      if(currentQI < questions.length){
        handlenextButton();
      }
      else{
        startQuiz();
      }
});
startQuiz();