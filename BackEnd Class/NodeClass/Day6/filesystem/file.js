const fs  = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'texts','first.txt'), "utf-8" ,(err,data)=>{
     if (err) throw err
     console.log(data);
})
fs.writeFile(path.join(__dirname,'texts','second.txt'), "You are successful" ,(err)=>{
     if (err) throw err
     console.log("File has been created");
})

