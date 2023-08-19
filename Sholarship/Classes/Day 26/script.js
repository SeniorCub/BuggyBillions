let link = "https://jsonplaceholder.typicode.com/users"

// Correction to assignment


let Latittude = async() => {
     let getLat = await fetch(link)
     let Lat = await getLat.json()
     Lat.forEach(lat => {
          console.log(lat.address.geo.lat);
     })
}

// Using Add Event Listener
let Lat = document.querySelector('.Latitude')
Lat.addEventListener('click',fan)

function fan() {
     Latittude()   
};

let Lng = document.querySelector('.Longitude')
Lng.addEventListener('click',far)

function far() {
     let longi = async() => {
          let long = await fetch(link)
          let lnng = await long.json()
          lnng.forEach(lnng =>{
               console.log(lnng.address.geo.lng) 
          })
     }
     longi()
};

let cat = document.querySelector('.atch')
cat.addEventListener('click',car)

function car() {
     let cartc = async() => {
          let cart = await fetch(link)
          let carr = await cart.json()
          carr.forEach(carr =>{
               console.log(carr.company.catchPhrase)
          })
     }
     cartc()
}








let bs = document.querySelector('.Bs')
bs.addEventListener('click',bbs)

function bbs() {
     let get = async() => {
          let getting = await fetch(link)
          let gett = await getting.json()
          gett.forEach(gett =>{
               console.log(gett.company.bs)
          })
     }
     get()
}