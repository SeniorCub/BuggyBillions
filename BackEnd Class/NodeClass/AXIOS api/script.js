// const axios = require('axios')
// node script
import axios from "axios";
// node --experimental-modules script.js to run
const apiUrl = 'https://fakestoreapi.com/products/123';
// GET

// axios.get(apiUrl)
// .then(response =>{
//      console.log(response.data);
//      // let data = response.data
//      // data.forEach(data => {
//      //      console.log(data);
//      // });
// })
// .catch(error =>{
//     console.log(error);
// })

// POST

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

// DELETE

// const apiiUrl = 'https://fakestoreapi.com/products/123';
// axios.delete(apiiUrl)
// .then(response => {
// console.log('DELETE Successful:', response.data);
// })
// .catch(error => {
// console.error('DELETE Error:', error);
// });

// PUT

// const apiiUrl = 'https://fakestoreapi.com/products/123';
// const updatedData = {
//      title: 'test product',
//      price: 13.5,
//      description: 'lorem ipsum set',
//      image: 'https://i.pravatar.cc',
//      category: 'electronic'
// };
// axios.put(apiiUrl, updatedData)
//   .then(response => {
//     console.log('PUT Successful:', response.data);
//   })
//   .catch(error => {
//     console.error('PUT Error:', error);
//   });

// PATCH

// const appiUrl = 'https://fakestoreapi.com/products/123';
// const partialData = {
//      title: 'test product',
//      price: 13.5,
//      description: 'lorem ipsum set',
//      image: 'https://i.pravatar.cc',
//      category: 'electronic'
// };
// axios.patch(appiUrl, partialData)
//   .then(response => {
//     console.log('PATCH Successful:', response.data);
//   })
//   .catch(error => {
//     console.error('PATCH Error:', error);
//   });
