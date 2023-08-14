let increase = document.querySelector('#in')
let decrease = document.querySelector('#de')
let save = document.querySelector('#save')
let del = document.querySelector('#del')
let displ = document.querySelector('#display')
let dis = document.querySelector('dis')

console.log(increase);
console.log(decrease);
console.log(displ);

let num = 0

increase.addEventListener('click',function(){
     num++
     displ.innerText = num
}
)

decrease.addEventListener('click',function(){
     num--
     displ.innerText = num
}
)

save.addEventListener('click',function(){
     dis.innerText = num + ' ,'
     num = 0
     displ.innerText = num
}
)

del.addEventListener('click',function(){
     dis.innerText = num + ' ,'
     num = 0
     displ.innerText = num
}
)