const countdown = document.querySelector('#time')
const highScoreMenu = document.querySelector('#highscores')
const answerList = document.querySelector('#answers')
const question = document.querySelector('#question')
const start = document.querySelector('#start')
const answersForm = document.querySelector('#answers-form')
const recordScore = document.querySelector('#record-score')
const finalScore = document.querySelector('#final-score')
const submitScore = document.querySelector('#submit')
const initials = document.querySelector('#initials')
const highScoresStorage = window.localStorage
const highscores = []
const topScores = document.querySelector('#top-scores')
const scoreList = document.querySelector('#score-list')
const back = document.querySelector('#back')
const clear = document.querySelector('#clear')
const menus = document.querySelectorAll('.menus')

let secondsLeft
let questionIndex = 0
let score

function calculateSeconds() {
    secondsLeft = ((questions.length + 1) * 15)
}

function quizTime() {

    const timerInterval = setInterval(() => {
        secondsLeft--;
        countdown.textContent = "time: " + secondsLeft
        if (secondsLeft <= 0) {
            transition(recordScore)
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

function reset() {
    questionIndex = 0
    score = 0
}



function penalty() { secondsLeft -= 15 }
const calculateScore = () => {
    score = secondsLeft
    secondsLeft = 0
    finalScore.textContent = 'Your final score is ' + score + '!'


}

function transition(show) {

    for (const menu of menus) {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden')
        }
    }
    show.classList.remove('hidden')

}

start.addEventListener("click", () => {
    reset()
    calculateSeconds()
    quizTime()
    transition(answersForm)

})


submitScore.addEventListener("click", event => {
    event.preventDefault()
    highscores.push({ initial: initials.value, score: score })
    transition(start)

})

answers.addEventListener("click", event => {
    if (event.target.textContent === questions[questionIndex].answer) {
        questionIndex++
        if (questionIndex < questions.length) {
            displayQuestions(questionIndex)
        } else {
            calculateScore()
            transition(recordScore)
        }
    } else {

        questionIndex++;
        if (questionIndex < questions.length) {

            penalty()
            displayQuestions(questionIndex)

        } else {
            calculateScore()
            transition(recordScore)
        }
    }
})

highScoreMenu.addEventListener("click", event => {

})

back.addEventListener("click", event => {

})
clear.addEventListener("click", event => {

})



displayQuestions(questionIndex)