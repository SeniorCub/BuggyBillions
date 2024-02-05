// module2.js
const multiply = (a, b) => {
    return a * b
}
const divide = (a, b) => {
     return (b !== 0 ? a / b : 'Cannot divide by zero')
}

module.exports = {multiply, divide}