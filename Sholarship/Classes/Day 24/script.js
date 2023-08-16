const name = document.querySelector(".name")
const username = document.querySelector(".username")
const phone = document.querySelector(".phone")
const email = document.querySelector(".email")
const website = document.querySelector(".website")
const address = document.querySelector(".address")

fetch("https://jsonplaceholder.typicode.com/users/5")
.then(data => data.json())
.then(data2 => {
          name.innerHTML = data2.name
          username.innerHTML = `@${data2.username}`
          phone.innerHTML = `+${data2.phone}`
          email.innerHTML = `${data2.email}`
          website.innerHTML = `${data2.website}`
          address.innerHTML = `${data2.address.street}, ${data2.address.suite}, ${data2.address.city}, ${data2.address.zipcode}`
     })