function add(a, b) {
        console.log("The addition is "+ (a+b))
}

function subtract(a, b) {
        console.log("subtraction is " + (a-b))
}
function multiply(a, b) {
        console.log( "the multiplication is " + a*b)
}
function divide(a, b) {
        console.log("Division is " + a / b)
}

module.exports = {
    add: add,
    subtract : subtract,
    multiply : multiply,
    divide: divide
}
