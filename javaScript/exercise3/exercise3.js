
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

var firstNumber = prompt("Please enter the first number: ")
var secondNumber = prompt("Please enter the second number: ")

var sum = alert(Number(firstNumber) + Number(secondNumber))



// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNumber = prompt("Please enter the first number: ")
var secondNumber = prompt("Please enter the second number: ")
var action = prompt("Please list whether you want to: Multiply, Divide, Add, or Subtract")

if (action == 'divide' || action == 'Divide') {
    var divide = alert(Number(firstNumber) / Number(secondNumber))
} else if (action == 'multiply' || action == 'Multiply') {
    var multiply = alert(Number(firstNumber) * Number(secondNumber))
} else if (action == 'add' || action == 'Add') {
    var sum = alert(Number(firstNumber) + Number(secondNumber))
} else if (action == 'subtract' || action == 'Subtract') {
    var difference = alert(Number(firstNumber) - Number(secondNumber))
} else {
    var error = alert('please enter valid action')
}
