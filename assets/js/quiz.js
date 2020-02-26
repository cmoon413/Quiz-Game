const countdown = document.querySelector('#time')
let secondsLeft = (questions.length + 1) * 15
const answerList = document.querySelector('#answers')
const question = document.querySelector('#question')
const start = document.querySelector('#start')
const answersForm = document.querySelector('#answers-form')
let questionIndex = 0

function quizTime() {
    const timerInterval = setInterval(()=> {
        secondsLeft--;
        countdown.textContent = "time: " + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

        }

    }, 1000);
}

function displayQuestions(position) {
    question.textContent = questions[position].title
    for (let i = 0; i < questions[position].choices.length; i++) {
        answerList.children[i].textContent = questions[position].choices[i]

    }

}


start.addEventListener("click", () => {
    start.classList.add('hidden')
    answersForm.classList.remove('hidden')
    quizTime()
})



answers.addEventListener("click", event => {
    if (event.target.textContent === questions[questionIndex].answer) {
        console.log('correct')
        questionIndex++
        if (questionIndex < questions.length) {
            displayQuestions(questionIndex)
        } else {
            console.log('end')
        }
    } else {
        console.log('Incorrect')
        questionIndex++;

        if (questionIndex < questions.length) {
            displayQuestions(questionIndex)
        } else {
            console.log('end')
        }
    }
})
displayQuestions(questionIndex)