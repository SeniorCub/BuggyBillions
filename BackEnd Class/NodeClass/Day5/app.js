const products = require('./demo');

console.log(products[2]);
// Using forEach
products.forEach( (product) => {
     console.log(product.name);
})
// Using map
products.map( (product) => {
     console.log(product.name);
})