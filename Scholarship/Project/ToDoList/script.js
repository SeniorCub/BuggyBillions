const btn = document.querySelector(".btn").addEventListener('click', () => {
     const list = document.querySelector("#myList")
     const out = document.querySelector(".out")
     var listt = ""
         listt += '<div>'
         listt += list.value
         listt += '</div>'
         listt += '<button>'
         listt += 'Remove'
         listt += '</button>'
     out.innerHTML = listt;
})