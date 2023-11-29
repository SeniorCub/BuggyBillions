const path = require('path');
const fs = require("fs");
const fspromise = require("fs").promises;


// Promise and Thenable
const data = fspromise.readFile((path.join(__dirname, "file", "text.txt")), "utf8", (err,data)=>{
     if (err) throw err
     console.log(data);
}).then((data)=>{
     console.log(data);
})
// Async and Await
const filetuff = async ()=>{
     const datum = await fspromise.readFile((path.join(__dirname, "file", "text.txt")), "utf8", (err,data)=>{
          if (err) throw err
          console.log(data);
     })
     console.log(datum);
}
filetuff()
// Async and Await using try and Catch method
const filestuff = async ()=>{
     try {
          const datum = await fspromise.readFile((path.join(__dirname, "file", "text.txt")), "utf8")
          console.log(datum);
          await fspromise.writeFile((path.join(__dirname, "file", "name.txt")), "Hello World")
          await fspromise.appendFile((path.join(__dirname, "file", "name.txt")), "\n welcome to a new world")
          // await fspromise.mkdir("./new")
     } catch (err) {
          console.log(err);
     }
}
filestuff()

// Using Stream
const readste = fs.createReadStream(path.join(__dirname, "file" ,"text.txt"), {encoding: 'utf8'});
const writeste = fs.createWriteStream(path.join(__dirname, "file", "text3.txt"))

readste.pipe(writeste)