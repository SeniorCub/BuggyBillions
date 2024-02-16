let two = document.querySelector(".two")
let coin = ["Bitcoin","Ethereum","BNB","ATOM","RUNE","AVAX","Dogecoin","Litecoin","BCH"]

document.addEventListener("DOMContentLoaded", display)

function display() {
     // i want to display each item in the array in two one by one
     two.innerHTML = coin.map((item) => {
          return `<li>${item}</li>`
     })
}