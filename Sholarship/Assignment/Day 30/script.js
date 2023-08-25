// script.js
const images = ["Man/Untitled.png", "Man/Untitled2.png", "Man/Untitled3.png", "Man/Untitled4.png"]; // Replace with your image URLs
const images2 = ["Woman/Untitled.png", "Woman/Untitled2.png", "Woman/Untitled3.png", "Woman/Untitled4.png"]; // Replace with your image URLs

const randomImageElement = document.getElementById("randomImage");
const randomImageElement2 = document.getElementById("randomImage2");

randomImageElement.addEventListener("mouseover", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImageSrc = images[randomIndex];
    randomImageElement.src = randomImageSrc;
});

randomImageElement2.addEventListener("mouseover", () => {
    const randomIndex = Math.floor(Math.random() * images2.length);
    const randomImageSrc = images2[randomIndex];
    randomImageElement2.src = randomImageSrc;
});