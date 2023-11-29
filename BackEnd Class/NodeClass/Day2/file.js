const path = require('path');
const fs = require("fs");

// To Read file
fs.readFile((path.join(__dirname, "file", "text.txt")), "utf8",(err, data)=>{
     if (err) throw err
     console.log(data);
})
// create and write file
fs.writeFile((path.join(__dirname, "file", "text2.txt")), "Girl this your body put my heart for Lockdown.!!!",(err)=>{
     if (err) throw err
     console.log("File Successfully created!!!");
})
// append file
fs.appendFile((path.join(__dirname, "file", "text2.txt")), "\n Girl you sweat pass Fanta o Fanta",(err)=>{
     if (err) throw err
     console.log("File Successfully appended!!!");
})