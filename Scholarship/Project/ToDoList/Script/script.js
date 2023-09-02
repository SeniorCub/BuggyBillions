const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const user = document.querySelector(".user").addEventListener("click", () => {
     alert("Hello")
});
const start = document.querySelector(".start").addEventListener("click", () => {
     alert("Hello")
});