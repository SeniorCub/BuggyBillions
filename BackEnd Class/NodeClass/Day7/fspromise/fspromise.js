let fsPromise = require("fs").promises;
let path = require("path");

const fileHandler = async () => {
     try {
          // READ file
          let firstOrder = await fsPromise.readFile(path.join(__dirname,'texts','second.txt'), "utf-8")
          console.log(firstOrder);
          // WRITE file
          await fsPromise.writeFile(path.join(__dirname, "texts","third.txt"), "That felling you have when you make your first millions. Can you relate??");
          // Append or Update File
          await fsPromise.appendFile(path.join(__dirname,"texts","first.txt"), "\n You are Blessed")
          // Rename File
          await fsPromise.rename(path.join(__dirname,"texts","second.txt"),(path.join(__dirname,"texts","newsecond.txt")))
          // Delete File
          await fsPromise.unlink(path.join(__dirname,"texts","forth.txt"))
     } catch (error) {
          console.log(error);
     }
}
fileHandler()