const {welcome, greetUser} = require("./greet.js")
const {add, subtract} = require('./module1');
const {multiply, divide} = require('./module2');
const {square, cube} = require('./module3');
const  {isEven, isOdd} = require('./module4');
const module5 = require('./module5');
const module6 = require('./module6');
const module7 = require('./module7');
const module8 = require('./module8');
const module9 = require('./module9');
const module10 = require('./module10');



const username = "Reuben";
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
console.log(module5.capitalize('hello'));
console.log(module6.getRandomNumber());
console.log(module7.generateId());
console.log(module8.farewell('Alice'));
console.log(module9.computePower(2, 3));
console.log(module10.isPalindrome('level'));
