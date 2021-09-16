var quizForm = document.querySelector('.quiz-form')
var submitBtn = document.querySelector('.btn-sub')
var displayMessage = document.querySelector('#output-msg')


const correctAnswers = ['90°', 'right angled']; 

function calculateScore(){
    var score = 0
    var index = 0
    const data = new FormData(quizForm);
    for(let value of data.values()){
        console.log(value)
        if(value === correctAnswers[index]){
            score += 1
        }
        index += 1
    }
    showMessage("Your score is "+ score)
}

function showMessage(msg){
    displayMessage.innerText = msg

}
submitBtn.addEventListener('click',calculateScore)