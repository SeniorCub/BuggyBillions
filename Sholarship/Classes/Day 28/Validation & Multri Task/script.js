// const nexts = document.querySelector('.next1').addEventListener('click', next);
// const form1 = document.querySelector('.form1');
// const form2 = document.querySelector('.form2');
// const form3 = document.querySelector('.form3');

// function next() {
//      // alert('Hello')
//      form1.style.left = '-200px'
//      form2.style.left = '100px' 
// }

// // NOTES
//      // to add and remove class
//      // form1.classList.add('form')
//      // form1.classList.remove('form')




// JavaScript code from Chat GPT
document.addEventListener("DOMContentLoaded", function() {
     const forms = document.querySelectorAll(".forms form");
     const steps = document.querySelectorAll(".steps div");
     let currentStep = 0;
 
     function showStep(step) {
         forms.forEach((form, index) => {
             if (index === step) {
                 form.style.left = `${100 * index}px`;
             } else {
                 form.style.left = "100%";
             }
         });
 
         steps.forEach((stepElement, index) => {
             if (index === step) {
                 stepElement.classList.add("active");
             } else {
                 stepElement.classList.remove("active");
             }
         });
     }
 
     function nextStep() {
         if (currentStep < forms.length - 1) {
             currentStep++;
             showStep(currentStep);
         }
     }
 
     function previousStep() {
         if (currentStep > 0) {
             currentStep--;
             showStep(currentStep);
         }
     }
 
     showStep(currentStep);
 
     const nextButtons = document.querySelectorAll(".next");
     const backButtons = document.querySelectorAll(".back");
 
     nextButtons.forEach((button, index) => {
         button.addEventListener("click", function(event) {
             event.preventDefault();
             nextStep();
         });
     });
 
     backButtons.forEach((button, index) => {
         button.addEventListener("click", function(event) {
             event.preventDefault();
             previousStep();
         });
     });
 });