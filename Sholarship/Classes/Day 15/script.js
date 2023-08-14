// // variable
// var call = "I am"
// let nasme = "Farinde"
// const ames = "Reuben"
// console.log (call)
// console.log (nasme)
// console.log (ames)

// // named function
// function add(a,b) {
//     return a + b
// }
// add(1,2)
// console.log (add(1,2))

// // Annonymous Function
// const sub = function (a,b) {
//     return a - b
// }
// console.log (sub(5,2))

// // Arrow Function
// const div = (a,b) => {
//     return a / b
// }
// console.log (div(9,3))

// // // IIFE Function
// // (function(a,b){
// //     console.log(a+b);
// // })(1,2);

// // method function
// const car = {
//     barnd : "toyota",
//     sound : function (sound) {
//         return sound + " is my sound"
//     }
// }
// console.log(car.sound("vummm!!"));

// // Asycnous Function
// const message = async () => {
//     const iam = await console.log("I am here");
//     const duro = await console.log("We go for party");
//     return iam, duro
// }
// message()

// let chanTxt = document.querySelector(".change")

// const changer = () => {
//     chanTxt.textContent = 'BuggyBillions'
//     console.log("Go Home");

// }

const datta = document.querySelector('.dat').value
const contet = document.querySelector('.content')

function clubCheck() {
    const datta = document.querySelector('.dat').value
    if(datta < 18) {
        contet.innerHTML = "You are not allowed"
    }else if (datta > 18 && datta <= 30) {
        contet.innerHTML = "You are allowed"
    } else{
        contet.innerHTML = "Go take care of yourself first"
    }
}

// Conditional Statement


