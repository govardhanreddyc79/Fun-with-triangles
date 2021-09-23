var inputOne = document.querySelector("#side1")
var inputTwo = document.querySelector("#side2")
var inputThree = document.querySelector("#side3")
var areaBtn = document.querySelector(".sub-btn")
var displayMessage = document.querySelector(".output-msg")


function calculateArea(){
    sideOne = inputOne.value
    sideTwo = inputTwo.value
    sideThree = inputThree.value
    if(sideOne != '' & sideTwo != '' & sideThree != '')
    {
        if(sideOne >0 & sideTwo >0 & sideThree >0)
        {
            var semiPerimeter = (Number(sideOne) + Number(sideTwo) + Number(sideThree))/2
            const areaOfTriangle = (Math.sqrt(semiPerimeter*(semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*(semiPerimeter-sideThree))).toFixed(3)
            showMessage("Area of a triangle using heron's formula is "+ areaOfTriangle + " units.")
        
        }else{
            showMessage("The input values should be positive")
        }
    }
    else{
        alert("Please fill out all Fields")
    }
    
}

function showMessage(msg){
    displayMessage.innerText = msg
}
areaBtn.addEventListener("click", calculateArea)