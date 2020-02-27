const countdown = document.querySelector('#time')
let secondsLeft = (questions.length + 1) * 15
const answerList = document.querySelector('#answers')
const question = document.querySelector('#question')
const start = document.querySelector('#start')
const answersForm = document.querySelector('#answers-form')
const recordScore = document.querySelector('#record-score')
let questionIndex = 0
let score

const quizTime = () => {
    const timerInterval = setInterval(() => {
        secondsLeft--;
        countdown.textContent = "time: " + secondsLeft

        if (secondsLeft <= 0) {
            endquiz()
            clearInterval(timerInterval);

        }

    }, 1000);
}

const displayQuestions = position => {
    question.textContent = questions[position].title
    for (let i = 0; i < questions[position].choices.length; i++) {
        answerList.children[i].textContent = questions[position].choices[i]

    }

}

const endquiz = () => {
    answersForm.classList.add('hidden')
    recordScore.classList.remove('hidden')


}
const startQuiz = () => {
    start.classList.add('hidden')
    answersForm.classList.remove('hidden')
}
const penalty = () => { secondsLeft -= 15 }



start.addEventListener("click", () => {
    startQuiz()
    quizTime()
})


answers.addEventListener("click", event => {
    if (event.target.textContent === questions[questionIndex].answer) {
        questionIndex++
        if (questionIndex < questions.length) {
            displayQuestions(questionIndex)
        } else {
            endquiz()
        }
    } else {

        questionIndex++;
        if (questionIndex < questions.length) {

            penalty()
            displayQuestions(questionIndex)

        } else {
            endquiz()
        }
    }
})


displayQuestions(questionIndex)