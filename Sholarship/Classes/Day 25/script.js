let link = "https://jsonplaceholder.typicode.com/users"

// let info = async() => {
//      let getting = await fetch(link)
//      let get = await getting.json()
//      get.forEach(get => {
//           console.log(get.address.geo.lng);
//      })
//      get.forEach(get => {
//           console.log(get.company.catchPhrase);
//      });
// }
// info()

// Assignment

// For Latittude Button
let latit = async() => {
     let getting = await fetch(link)
     let get = await getting.json()
     get.forEach(get => {
          console.log(get.address.geo.lat);
     })
     console.log(   );
}
// For Longitude Button
let longi = async() => {
     let getting = await fetch(link)
     let get = await getting.json()
     get.forEach(get => {
          console.log(get.address.geo.lng);
     })
     console.log(   );
}
// For CatchPhrase Button
let catPhr = async() => {
     let getting = await fetch(link)
     let get = await getting.json()
     get.forEach(get => {
     console.log(get.company.catchPhrase);
     })
     console.log(   );
}
// For Bs Button
let bsss = async() => {
     let getting = await fetch(link)
     let get = await getting.json()
     get.forEach(get => {
     console.log(get.company.bs);
     })
     console.log(   );
}