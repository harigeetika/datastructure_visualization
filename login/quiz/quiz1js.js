const quizData = [
    {
        question: "Which one of the below mentioned is linear data structure?",
        a: "Stack",
        b: "Queue",
        c: "Linked list",
        d: "All of the above",
        correct: "d",
    },
    {
        question: " Which of the following is not the application of stack?",
        a: "A parentheses balancing program",
        b : "Tracking of local variables at run time",
        c : "Compiler Syntax Analyzer",
        d : "Data Transfer between two asynchronous process",
        correct: "a",
    },
    {
        question: " In linked list each node contains a minimum of two fields. One field is data field to store the data second field is?",
        a: " Pointer to character",
        b: " Pointer to integer",
        c: "Pointer to node",
        d: " Node",
        correct: "c",
    },
    {
        question: "What is the value of the postfix expression 6 3 2 4 + - *",
        a: "1",
        b: "40",
        c: "74",
        d: "-18",
        correct: "d",
    },
    
    {
        question: "Linked list is considered as an example of ___________ type of memory allocation",
        a: "Dynamic",
        b: "Static",
        c: "Compile time",
        d: " Heap",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
counter();
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function counter() {
    const startmin = 2;
    let time = startmin * 60;

    const countdownel = document.getElementById('counter');

    var ret = setInterval(updatecounter,1000);
  
    function updatecounter() {
        console.log(time);
            const min = Math.floor(time/60);
            let seconds = time%60;
            seconds = seconds < 10 ? '0'+seconds : seconds;
            countdownel.innerHTML = `${min}:${seconds}`;
            time--;
            if (time == '0'){
                countdownel.innerHTML = `Time is up!!!!`;
                clearInterval(ret);
                otherfunction();
            }
        }

    function otherfunction(){
        quiz.innerHTML = `
        <h3>Time is up!!!</h3>
        <h3>You answered ${score}/${quizData.length} questions correctly</h3>

        <button onclick="location.reload()">Reload</button>
        <button onclick="window.location.href='/mini-project/login/welcome.html';">Back</button>`;
    }
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h3>You answered ${score}/${quizData.length} questions correctly</h3>

           <button onclick="location.reload()">Reload</button>
           <button onclick="window.location.href='/mini-project/login/welcome.html';">Back</button>
           `
       }
    }
});