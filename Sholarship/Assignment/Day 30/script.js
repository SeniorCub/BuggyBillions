// script.js
const images = ["Man/Untitled2.png", "Man/Untitled3.png", "Man/Untitled4.png"]; // Replace with your image URLs
const images2 = ["Woman/Untitled2.png", "Woman/Untitled3.png", "Woman/Untitled4.png"]; // Replace with your image URLs

const randomImageElement = document.getElementById("randomImage");
const randomImageElement2 = document.getElementById("randomImage2");

randomImageElement.addEventListener("mouseover", () => {
     const randomIndex = Math.floor(Math.random() * images.length);
     const randomImageSrc = images[randomIndex];
     randomImageElement.src = randomImageSrc;
 });
 
 randomImageElement.addEventListener("mouseout", () => {
     randomImageElement.src = "Man/Untitled.png";
 });

 randomImageElement2.addEventListener("mouseover", () => {
     const randomIndex = Math.floor(Math.random() * images2.length);
     const randomImageSrc = images2[randomIndex];
     randomImageElement2.src = randomImageSrc;
 });
 
 randomImageElement2.addEventListener("mouseout", () => {
     randomImageElement2.src = "Woman/Untitled.png";
 });