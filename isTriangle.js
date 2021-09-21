var triangleForm = document.querySelector(".triangle-form")
var angle1 = document.querySelector("#angle1")
var angle2 = document.querySelector("#angle2")
var angle3 = document.querySelector("#angle3")
const isTriangleBtn = document.querySelector(".sub-btn")
const displayMessage = document.querySelector(".output-msg")


function isTriangle(){
    if(angle1.value != '' & angle2.value != '' & angle3.value != ''){
        if(angle1.value >0 & angle2.value >0 & angle3.value >0)
        {
            const sumOfAngles = calculateSumOfAngles()
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

function calculateSumOfAngles(){
     var angleSum = angle1.value + angle2.value + angle3.value
    return angleSum
}

function showMessage(msg){
    displayMessage.innerText = msg
}

isTriangleBtn.addEventListener("click", isTriangle)