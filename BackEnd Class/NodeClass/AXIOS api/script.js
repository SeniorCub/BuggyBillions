const axios = require('axios')
// node script
// import axios from "axios";
// node --experimental-modules script.js to run
const apiUrl = 'https://fakestoreapi.com/products';

axios.get(apiUrl)
.then(response =>{
    let data = response.data
    data.forEach(data => {
        console.log(data);
    });
})
.catch(error =>{
    console.log(error);
})

// const postData = {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// };
  
// axios.post(apiUrl, postData)
//     .then(response => {
//         console.log('POST Response:', response.data);
// })
// .catch(error => {
//     console.error('POST Error:', error);
// });
  