
const body = document.querySelector("body")
const name = document.querySelector(".name")
const username = document.querySelector(".username")
const phone = document.querySelector(".phone")
const email = document.querySelector(".email")
const website = document.querySelector(".website")
const address = document.querySelector(".address")

let active = document.querySelector('.active')
active.addEventListener('click',go)

let link = "https://jsonplaceholder.typicode.com/users"

function go() {     
     let idd = window.prompt("Enter user id")

     if (idd <= 10 && idd >= 0) {
          fetch(link)
     .then(data => data.json())
     .then(data2 => {
          name.innerHTML = data2[idd].name
          username.innerHTML = `@${data2[idd].username}`
          phone.innerHTML = `+${data2[idd].phone}`
          email.innerHTML = `${data2[idd].email}`
          website.innerHTML = `${data2[idd].website}`
          address.innerHTML = `${data2[idd].address.street}, ${data2[idd].address.suite}, ${data2[idd].address.city}, ${data2[idd].address.zipcode}`
     })
     }else {
          alert("You are not a user")
          body.innerHTML = `<h1 style='text-align:center;'> This Id: ${idd} is not recognised</h1>`
          // window.location('index.html')
     }
};