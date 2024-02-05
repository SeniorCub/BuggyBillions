// module7.js
module.exports = {
     generateId: () => Math.random().toString(36).substring(7),
     isNumeric: (value) => !isNaN(parseFloat(value)) && isFinite(value)
   };
   