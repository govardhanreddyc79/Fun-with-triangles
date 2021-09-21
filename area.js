var inputOne = document.querySelector("#side1")
var inputTwo = document.querySelector("#side2")
var inputThree = document.querySelector("#side3")
var areaBtn = document.querySelector(".sub-btn")
var displayMessage = document.querySelector(".output-msg")


function calculateArea(){
    sideOne = Number(inputOne.value)
    sideTwo = Number(inputTwo.value)
    sideThree = Number(inputThree.value)
    if(sideOne != 0 & sideTwo != 0 & sideThree != 0)
    {
        if(sideOne >0 & sideTwo >0 & sideThree >0)
        {
            var semiPerimeter = (sideOne + sideTwo + sideThree)/2
            const areaOfTriangle = Math.sqrt(semiPerimeter*(semiPerimeter-sideOne)*(semiPerimeter-sideTwo)*(semiPerimeter-sideThree))
            showMessage("Area of a triangle using heron's formula is "+ areaOfTriangle.toFixed(3) + " units.")
        
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