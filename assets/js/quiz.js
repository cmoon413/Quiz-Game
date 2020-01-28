var countdown = document.querySelector('#time')
var secondsLeft = (questions.length + 1) * 15


function quizTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = "time: " + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

        }

    }, 1000);
}