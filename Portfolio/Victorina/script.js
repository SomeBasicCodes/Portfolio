const questions = [
    {question: "What HTML is?",
        answers:["Markup language","Programming language","Data base"],
        correctAnswer:0
    },
    {question: "What CSS is?",
        answers:["Scripts","Functions","Styles"],
        correctAnswer:2
    },
    {question: "What JS is?",
        answers:["Markup language","Programming language","Styles"],
        correctAnswer:1
    },
    {question: "What let is?",
        answers:["Переменная","Cycle","Branch"],
        correctAnswer:0
    },
    {question: "What if/else is?",
        answers:["Переменная","Cycle","Branch"],
        correctAnswer:2
    },
];
let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");


function loadQuestion() {
    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    answersElement.innerHTML = "";
    for(let i = 0; i < question.answers.length; i++){
        const answer = document.createElement("button");
        answer.textContent = question.answers[i];
        answer.addEventListener("click",() => checkAnswer(i));
        answersElement.appendChild(answer);
    }
}
function checkAnswer(answerIndex){
    const question = questions[currentQuestion];
    if(answerIndex === question.correctAnswer){
        score++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length) {
        loadQuestion();
        }else{
        showResult();
    }
}
function showResult(){
    questionElement.textContent = "";
    answersElement.innerHTML = "";
    submitButton.style.display = "none";
    resultElement.textContent = `Score: ${score} из ${questions.length}`;
}
submitButton.addEventListener("click",()=>checkAnswer());
loadQuestion();