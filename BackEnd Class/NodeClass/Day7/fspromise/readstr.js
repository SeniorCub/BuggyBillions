let fs = require("fs");
const path = require("path")

const readStr = fs.createReadStream(path.join(__dirname,"texts","forth.txt"));
const writeStr = fs.createWriteStream(path.join(__dirname,"texts","fifth.txt"));

readStr.pipe(writeStr);