let idd = window.prompt("Enter user id")
const name = document.querySelector(".name")
const username = document.querySelector(".username")
const phone = document.querySelector(".phone")
const email = document.querySelector(".email")
const website = document.querySelector(".website")
const address = document.querySelector(".address")

if (idd <= 10 && idd >= 0) {
     fetch("https://jsonplaceholder.typicode.com/users")
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
}