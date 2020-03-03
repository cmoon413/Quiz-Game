const countdown = document.querySelector('#time')
let secondsLeft = ((questions.length + 1) * 15)
const answerList = document.querySelector('#answers')
const question = document.querySelector('#question')
const start = document.querySelector('#start')
const answersForm = document.querySelector('#answers-form')
const recordScore = document.querySelector('#record-score')
const finalScore = document.querySelector('#final-score')
const submitScore = document.querySelector('#submit')
const initials = document.querySelector('#initials')
const highScores = window.localStorage
const array = []

let questionIndex = 0
let score



function quizTime() {
    const timerInterval = setInterval(() => {
        secondsLeft--;
        countdown.textContent = "time: " + secondsLeft
        if (secondsLeft <= 0) {
            transition(start, recordScore)
            clearInterval(timerInterval)
            countdown.textContent = "time: "
        }
    }, 1000);
}

function displayQuestions(position) {
    question.textContent = questions[position].title
    for (let i = 0; i < questions[position].choices.length; i++) {
        answerList.children[i].textContent = questions[position].choices[i]
    }

}





function penalty() { secondsLeft -= 15 }
const calculateScore = () => {
    score = secondsLeft
    secondsLeft = 0
    finalScore.textContent = 'Your final score is ' + score + '!'


}

function transition(hide, show) {
    if (!hide.classList.contains('hidden')) {
        hide.classList.add('hidden')
        show.classList.remove('hidden')
    }
}

start.addEventListener("click", () => {
    quizTime()
    transition(start, answersForm)

})
clearvalues() => { seconds }

submitScore.addEventListener("click", event => {
    event.preventDefault()
    array.push({ initial: initials.value, score: score })
    transition(recordScore, start)

})
answers.addEventListener("click", event => {
    if (event.target.textContent === questions[questionIndex].answer) {
        questionIndex++
        if (questionIndex < questions.length) {
            displayQuestions(questionIndex)
        } else {
            calculateScore()
            transition(answersForm, recordScore)
        }
    } else {

        questionIndex++;
        if (questionIndex < questions.length) {

            penalty()
            displayQuestions(questionIndex)

        } else {
            transition(answersForm, recordScore)
        }
    }
})


displayQuestions(questionIndex)