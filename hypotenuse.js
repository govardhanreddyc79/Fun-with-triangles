var base = document.querySelector("#base")
var height = document.querySelector("#height")
var hypotenuseBtn = document.querySelector(".sub-btn")
var displayMessage = document.querySelector(".output-msg")


function calculateHypotenuse(){
    if(base.value != '' & height.value != '')
    {
        if(base.value > 0 & height.value > 0)
        {
            const baseSquare = Number((base.value))**2
            const heightSquare = Number((height.value))**2
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