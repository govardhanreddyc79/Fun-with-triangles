var base = document.querySelector("#base")
var height = document.querySelector("#height")
var hypotenuseBtn = document.querySelector(".hypotenuse-btn")
var displayMessage = document.querySelector(".output-msg")


function calculateHypotenuse(){
    const baseSquare = (base.value)**2
    const heightSquare = (height.value)**2
    const hypotenuse = Math.sqrt(baseSquare+heightSquare)
    showMessage("The length of hypotenuse is " + hypotenuse)

}

function showMessage(msg){
    displayMessage.innerText = msg
}
hypotenuseBtn.addEventListener("click", calculateHypotenuse)