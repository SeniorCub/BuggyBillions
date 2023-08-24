// Next on Form one
const next1 = document.querySelector('.next1').addEventListener("click", btn_next1);
// Next and Back on Form 2
const next2 = document.querySelector('.next2').addEventListener("click", btn_next2);
const back2 = document.querySelector('.back2').addEventListener("click", btn_back2);
// Next and Back on Form 3
const next3 = document.querySelector('.next3').addEventListener("click", btn_next3);
const back3 = document.querySelector('.back3').addEventListener("click", btn_back3);
// Back and Next on Form 4
const back4 = document.querySelector('.back4').addEventListener("click", btn_back4);

// Inputs on Form 1
let firstName = document.querySelector('#first_name');
let lastName = document.querySelector('#last_name');
let userName = document.querySelector('#user_name');
// Inputs on Form 2
let email = document.querySelector('#email');
let address = document.querySelector('#address');
let age = document.querySelector('#age');
// Inputs on Form 3
let crPwd = document.querySelector('#CrPwd');
let coPwd = document.querySelector('#CoPwd');

// For Input filter
const fullNamePattern = /^[A-Za-z\s'\-]+$/;

// Step 1
function btn_next1() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line2 =document.querySelector('.line2')
     
     if (firstName.value == "" || lastName.value == "" || userName.value == "") {
          alert('Error')
     }else {
          line2.style.display = 'block'
          form1.style.left = '-600px'
          form2.style.left = '130px'
          form3.style.left = '600px'
          form4.style.left = '1070px'
     }
};
// Step 2
function btn_next2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line3 =document.querySelector('.line3')

     if (email.value == "" || address.value == "" || age.value == "") {
          alert('Error')
     }else {
     line3.style.display = 'block'
     form1.style.left = '-1070px'
     form2.style.left = '-600px'
     form3.style.left = '130px'
     form4.style.left = '600px'
     }
};
function btn_back2() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line2 =document.querySelector('.line2')

     line2.style.display = 'none'
     form1.style.left = '130px'
     form2.style.left = '600px'
     form3.style.left = '1070px'
     form4.style.left = '1540px'
};
// Step 3
function btn_back3() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line3 =document.querySelector('.line3')

     line3.style.display = 'none'
     form1.style.left = '-600px'
     form2.style.left = '130px' 
     form3.style.left = '600px'
     form4.style.left = '1070px'
};
function btn_next3() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line4 =document.querySelector('.line4')
     if (crPwd.value == "" || coPwd.value == "") {
               alert('Error')
          }
          else {
                if (crPwd.value == coPwd) {
               line4.style.display = 'block'
               form1.style.left = '-1540px'
               form2.style.left = '-1070px' 
               form3.style.left = '-600px'
               form4.style.left = '130px'
                }else {
               alert('Passord is not the same')
          }}
};
// Step 4
function btn_back4() {
     const form1 = document.querySelector('.form1')
     const form2 = document.querySelector('.form2')
     const form3 = document.querySelector('.form3')
     const form4 = document.querySelector('.form4')
     const line4 =document.querySelector('.line4')

     line4.style.display = 'none'
     form1.style.left = '-1070px'
     form2.style.left = '-600px'
     form3.style.left = '130px'
     form4.style.left = '600px'
};











// JavaScript code from Chat GPT
// document.addEventListener("DOMContentLoaded", function() {
//      const forms = document.querySelectorAll(".forms form");
//      const steps = document.querySelectorAll(".steps div");
//      let currentStep = 0;
 
//      function showStep(step) {
//          forms.forEach((form, index) => {
//              if (index === step) {
//                  form.style.left = `${100 * index}px`;
//              } else {
//                  form.style.left = "100%";
//              }
//          });
 
//          steps.forEach((stepElement, index) => {
//              if (index === step) {
//                  stepElement.classList.add("active");
//              } else {
//                  stepElement.classList.remove("active");
//              }
//          });
//      }
 
//      function nextStep() {
//          if (currentStep < forms.length - 1) {
//              currentStep++;
//              showStep(currentStep);
//          }
//      }
 
//      function previousStep() {
//          if (currentStep > 0) {
//              currentStep--;
//              showStep(currentStep);
//          }
//      }
 
//      showStep(currentStep);
 
//      const nextButtons = document.querySelectorAll(".next");
//      const backButtons = document.querySelectorAll(".back");
 
//      nextButtons.forEach((button, index) => {
//          button.addEventListener("click", function(event) {
//              event.preventDefault();
//              nextStep();
//          });
//      });
 
//      backButtons.forEach((button, index) => {
//          button.addEventListener("click", function(event) {
//              event.preventDefault();
//              previousStep();
//          });
//      });
//  });



// NOTES
     // to add and remove class
     // form1.classList.add('form')
     // form1.classList.remove('form')
