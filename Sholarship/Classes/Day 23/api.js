let ded = document.querySelector('#reu')


fetch("https://jsonplaceholder.typicode.com/users")
.then(data => data.json())
.then(data2 => data2.forEach(datum => {
     // console.log(datum.name)
     ded.innerHTML += datum.name
}))

// let item = document.querySelectorAll('.reu')
// item.forEach(items => console.log(items))

