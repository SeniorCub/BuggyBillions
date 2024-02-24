// Show and Hide Password
const password = document.querySelectorAll('#EnPwd')
const toogler = document.querySelectorAll('#iee')
toogler.forEach(i=>{
     i.addEventListener('click', showHidePassword)
} )
function showHidePassword(){
     password.forEach(pwd => {
          pwd.type === 'password'? pwd.setAttribute('type', 'text') : pwd.setAttribute('type', 'password')
     })
     toogler.forEach(i=>{
          i.classList.toggle('fa-eye')
          i.classList.toggle('fa-eye-slash')
     })
}