const capitalize = (str) => {
     return str.toUpperCase()
}
const reverse = (str) => {
     return str.split('').reverse().join('')
}    
module.exports = { capitalize, reverse }