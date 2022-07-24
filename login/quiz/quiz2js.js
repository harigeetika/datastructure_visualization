const quizData = [
    {
        question: "What are the applications of dequeue?",
        a: " A-Steal job scheduling algorithm",
        b: "Can be used as both stack and queue",
        c: "To find the maximum of all sub arrays of size k",
        d: "To avoid collision in hash tables",
        correct: "d",
    },
    {
        question: "Which of the following traversing algorithm is not used to traverse in a tree?",
        a: " Post order",
        b : "Pre order",
        c : "Post order",
        d : "Randomized",
        correct: "d",
    },
    {
        question: "You are given pointers to first and last nodes of a singly linked list, which of the following operations are dependent on the length of the linked list?",
        a: " Delete the first element",
        b: " Insert a new element as a first element",
        c: "Delete the last element of the lis",
        d: " Add a new element at the end of the list",
        correct: "c",
    },
    {
        question: "What is the postfix expression for the following infix expression?a/b^c-d",
        a: " abc^/d-",
        b: "ab/cd^-",
        c: "ab/^cd-",
        d: "abcd^/-",
        correct: "a",
    },
    
    {
        question: " Which of the following properties is associated with a queue?",
        a: " First In Last Out",
        b: "First In First Out",
        c: "Last In First Out",
        d: " Last In Last Out",
        correct: "b",
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
        <h2>Time is up!!!</h2>
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