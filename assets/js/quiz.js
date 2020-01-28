var countdown = document.querySelector('#time')
var secondsLeft = (questions.length + 1) * 15
var answerList = document.querySelector('#answers')
var answerOne = document.querySelector('#answer1')
var answerTwo = document.querySelector('#answer2')
var answerThree = document.querySelector('#answer3')
var answerFour = document.querySelector('answer4')
var questionIndex = 0
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

answers.addEventListener("click", function(event) {
    if(event.target.textContent === questions[questionIndex].answer) {
        console.log('correct')
        questionIndex++
        if(questionIndex < questions.length){
            displayQuestions(questionIndex)
            } else{
            console.log('end')
        }
    } else {
        console.log('Incorrect')
        questionIndex++;

        if (questionIndex < questions.length){
        displayQuestions(questionIndex)
        }   else {
            console.log('end')
        }
    }
  });
  displayQuestions(questionIndex)
