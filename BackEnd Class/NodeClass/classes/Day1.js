// Importing modules from external file
const adder = require("./add")
const subtract = require("./sub")

const {add,sub,div,multi} = require("./calc")

console.log(adder(6,3));
console.log(subtract(6,3));
console.log(add(4,2));
console.log(sub(4,2));
console.log(div(4,2));
console.log(multi(4,2));


console.log(2+3);

const sentence = "ade goes"
console.log(sentence);