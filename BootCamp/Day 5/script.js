let username = document.querySelector("#username")
let pass = document.querySelector("#password")
let but = document.querySelector("#but")
let real = document.querySelector('.real')
let fak = document.querySelector('.fak')

function send(){
     // alert('Your Username is: ' + username.value)
     // alert('Your password is: ' + pass.value)

     // console.log(username.value)
     // console.log(pass.value)

     real.textContent = "Congratulation!!!  " + username.value
     fak.textContent = "Your password is:  " + pass.value
}
     console.log(username)
     console.log(pass)
     console.log(but)