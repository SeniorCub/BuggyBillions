// module10.js
module.exports = {
     isPalindrome: (str) => str === str.split('').reverse().join(''),
     countWords: (str) => str.split(/\s+/).length
   };
   