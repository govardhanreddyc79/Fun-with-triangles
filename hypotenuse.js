var base = document.querySelector("#base")
var height = document.querySelector("#height")
var hypotenuseBtn = document.querySelector(".sub-btn")
var displayMessage = document.querySelector(".output-msg")


function calculateHypotenuse(){
    const inputBase = base.value
    const inputHeight = height.value
    if(inputBase != '' & inputHeight != '')
    {
        if(inputBase > 0 & inputHeight > 0)
        {
            const baseSquare = Number(inputBase)**2
            const heightSquare = Number((inputHeight))**2
            const hypotenuse = Math.sqrt(baseSquare+heightSquare)
            showMessage("The length of hypotenuse is " + hypotenuse)
        }
        else
        {
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
hypotenuseBtn.addEventListener("click", calculateHypotenuse)