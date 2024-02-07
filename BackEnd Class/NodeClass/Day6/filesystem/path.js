const path = require('path')

// Returns: '/foo/bar/baz/asdf'version
console.log(path.dirname('/foo/bar/baz/asdf/quux'));

console.log(__dirname);
console.log(__filename);

// To create path
let mypath = path.join("Ogbomosho","LAUTECH","Sunmence","BuggyBillions","Room2")
// to get directory name of the path created
let mydir = path.dirname(mypath)
// File name if Base name
let mybase = path.basename(mypath)

console.log(mypath);
console.log(mydir);
console.log(mybase);