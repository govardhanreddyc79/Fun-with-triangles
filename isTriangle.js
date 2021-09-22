// var triangleForm = document.querySelector(".triangle-form")
var inputOne = document.querySelector("#angle1")
var inputTwo = document.querySelector("#angle2")
var inputThree = document.querySelector("#angle3")
const isTriangleBtn = document.querySelector(".sub-btn")
const displayMessage = document.querySelector(".output-msg")


function isTriangle(){
    const AngleOne = inputOne.value
    const AngleTwo = inputTwo.value
    const AngleThree = inputThree.value
    if(AngleOne != '' & AngleTwo != '' & AngleThree != ''){
        if(AngleOne >0 & AngleTwo >0 & AngleThree >0)
        {
            const sumOfAngles = calculateSumOfAngles(AngleOne, AngleTwo, AngleThree)
            if(sumOfAngles === 180){
                showMessage("Yay, the angles form a triangle!")
            }else{
                showMessage("Oh Oh! The angles doesn't form a triangle")
            }
        }
        else{
            showMessage("Angles of a triangle should be positive")
        }
    }else{
        alert("Please fill out all Fields")
    }
   
}

function calculateSumOfAngles(AngleOne, AngleTwo, AngleThree){
     var angleSum = Number(AngleOne) + Number(AngleTwo) + Number(AngleThree)
    return angleSum
}

function showMessage(msg){
    displayMessage.innerText = msg
}

isTriangleBtn.addEventListener("click", isTriangle)