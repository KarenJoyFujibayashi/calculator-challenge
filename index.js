let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl=document.getElementById("sum-el")
// Create four functions : add(), subtract(), multiply(), divide()
function add() {
  sum = num1 + num2
 sumEl.textContent = "　Total : " + sum
}

function subtract() {
  dif = num1 - num2
  sumEl.textContent = "　Total : " + dif
}

function divide() {
  qou = num1 / num2
  sumEl.textContent = "　Total : " + qou
}

function multiply() {
  pro = num1 * num2
  sumEl.textContent = "　Total : " +　pro
}
// Call the correct  function when the user clicks on one of the buttons
// Perfom the given calculator using num1 and num2
// Render the result of the calculation in the paragraph with the id = "sum-el"
// E.g. if user clicks on the "Plus" button, you sould render
// "Total : 10" (since 8 + 2 = 10) inside the paragraph with the id = "sum-el"
