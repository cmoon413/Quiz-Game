var countdown = document.querySelector('#time')
var secondsLeft = (questions.length + 1) * 15
var answerList = document.querySelector('#answers')
var answerOne = document.querySelector('#answer1')
var answerTwo = document.querySelector('#answer2')
var answerThree = document.querySelector('#answer3')
var answerFour = document.querySelector('answer4')

function quizTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = "time: " + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

        }

    }, 1000);
}
function displayQuestions(position) {
    for (let i = 0; i < questions[position].choices.length; i++) {
        answerList.children[i].textContent = questions[position].choices[i]
        
    }

}


