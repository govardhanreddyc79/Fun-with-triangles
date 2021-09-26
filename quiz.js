var quizForm = document.querySelector('.quiz-form')
var submitBtn = document.querySelector('.sub-btn')
var displayMessage = document.querySelector('#output-msg')


const correctAnswers = ['90°', 'right angled', 'one right angle', '12, 16, 20','Equilateral triangle','100°','30°','a + b + c','no','45°']; 


function checkFormValues(inputValues){
    let index = 0;
    for(let value of inputValues){
        index = index + 1;
    }
    
    if(index === correctAnswers.length){
        return true;
    } else {
        alert("Please attempt the entire quiz.")
    }
}

function calculateScore(){
    var score = 0
    var index = 0
    const data = new FormData(quizForm);
    if(checkFormValues(data.values()))
    {
        for(let value of data.values()){
            console.log(value)
            if(value === correctAnswers[index]){
                score += 1
            }
            index += 1
        }
        showMessage("Your score is "+ score)
}
}

function showMessage(msg){
    displayMessage.innerText = msg

}
submitBtn.addEventListener('click',calculateScore)