// Promise and then Method to fetch APIs
let url = "https://jsonplaceholder.typicode.com/users"
fetch(url).then(Response => Response.json()).then(dotun => console.log(dotun));

// For Loop
for (let i = 0; i <= 10; i++) {
     console.log(i);
}

// While loop
let d = 0
while (d <= 10) {
     d++
     console.log(d);
};

// Do While Loop
let s = 0
do {
     console.log(s);
     s++
} while (s <= 10);

// For each
let cars = ["Benz","Audi","Ferari","Lexus","Toyota","BMW","Lamboghini"];
cars.forEach(car3 =>{
     console.log(`My favorite car is ${car3}`);
});
// Using Map same as For Each
cars.map(car =>{
     console.log(`My favorite car is ${car}`);
});

let user = [
     {
          id:1,
          name:"Rose"
     },
     {
          id:2,
          name:"Osooluwa"
     },
     {
          id:3,
          name:"Latifat"
     },
     {
          id:4,
          name:"Reuben"
     },
     {
          id:5,
          name:"Zainab"
     },
     {
          id:6,
          name:"Pax_Den"
     },
];
user.forEach(cac =>{
     console.log(`Our names are ${cac.name} and is ${cac.id}`);
});


// Promise and then Method to fetch APIs
let ded = "https://jsonplaceholder.typicode.com/users"
fetch(ded).then(Response => Response.json()).then(dotun => dotun.forEach(pro =>{
     console.log(pro.address);
}));

// Assignment
let den = "https://jsonplaceholder.typicode.com/users"
fetch(den).then(Response => Response.json()).then(dotun => {
     let stuff = document.querySelector('.fet');

     dotun.forEach(dotun => {
          let div = document.createElement('div');
          div.innerText = `ID: ${dotun.id}, Name: ${dotun.name}, UserName: ${dotun.username}`;
          stuff.appendChild(div);
     });
})
.catch(error => {
     console.log('Error Fetching Data: ', error);
});