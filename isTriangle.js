var triangleForm = document.querySelector(".triangle-form")
const isTriangleBtn = document.querySelector(".sub-btn")
const displayMessage = document.querySelector(".output-msg")


function isTriangle(){
    const sumOfAngles = calculateSumOfAngles()
    if(sumOfAngles === 180){
        showMessage("Yay, the angles form a triangle!")
    }else{
        showMessage("Oh Oh! The angles doesn't form a triangle")
    }
}

function calculateSumOfAngles(){
    const data = new FormData(triangleForm);
    var angleSum = 0
    for(let value of data.values()){
        angleSum += Number(value)
    }
    return angleSum
}

function showMessage(msg){
    displayMessage.innerText = msg
}

isTriangleBtn.addEventListener("click", isTriangle)