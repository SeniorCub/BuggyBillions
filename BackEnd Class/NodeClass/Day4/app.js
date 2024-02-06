const {welcome, greetUser} = require("./greet.js")
const {add, subtract} = require('./module1');
const {multiply, divide} = require('./module2');
const {square, cube} = require('./module3');
const  {isEven, isOdd} = require('./module4');
const { capitalize, reverse } = require('./module5');
const {getRandomNumber, roundNumber} = require('./module6');
const generateId = require('./module7');
const {greet, farewell} = require('./module8');
const {computePower, calculateSquareRoot} = require('./module9');
const countWords = require('./module10');



const username = "Reuben";
const name = "Reuben";

// Output
welcome(username);
greetUser(username);
console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(4, 7));
console.log(divide(40, 4));
console.log(square(2));
console.log(cube(2));
console.log(isEven(33));
console.log(isOdd(33));
console.log(capitalize('hello'));
console.log(reverse('hello'));
console.log(getRandomNumber());
console.log(roundNumber(4.5));
console.log(generateId());
console.log(greet(name));
console.log(farewell(name));
console.log(computePower(2, 3));
console.log(calculateSquareRoot(16));
console.log(countWords('level'));