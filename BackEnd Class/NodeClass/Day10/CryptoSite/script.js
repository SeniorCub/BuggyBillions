document.querySelector('.fa-sun').addEventListener('click', lightMode);
document.querySelector('.fa-moon').addEventListener('click', darkMode);
const navLinks = document.querySelectorAll('.nav-link');
const faSolid = document.querySelectorAll('.fa-solid');
const navBar = document.querySelector('.navbar')
const body = document.querySelector('body');
const tex = document.querySelector('.tex');
const dex = document.querySelector('.dex');
const ddex = document.querySelectorAll('.ddex');

function darkMode() {
     document.querySelector('.change').innerHTML = `<i class="fa-solid fa-2x fa-toggle-on"></i>`;
     body.style.backgroundColor = '#000';
     navLinks.forEach(link => {
          link.style.color = '#fff';
     });
     faSolid.forEach(fa => {
          fa.style.color = '#fff';
     });
     tex.style.color = '#fff';
     dex.style.color = '#fff';
     ddex.forEach(d => {
          d.style.color = '#fff';
     });
}
function lightMode() {
     document.querySelector('.change').innerHTML = `<i class="fa-solid fa-2x fa-toggle-off"></i>`;
     body.style.backgroundColor = '#03649c';
     navLinks.forEach(link => {
          link.style.color = '#000';
     });
     faSolid.forEach(fa => {
          fa.style.color = '#fff';
     });
     tex.style.color = '#000';
     dex.style.color = '#000';
     ddex.forEach(d => {
          d.style.color = '#000';
     });
}