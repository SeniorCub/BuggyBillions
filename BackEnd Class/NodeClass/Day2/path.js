const path = require('path');

// To get the directory of the file
console.log(__dirname);
// To get the path of the file
console.log(__filename);
// To construct Path (path.join)
console.log(path.join('c:','ubuntu',' ','user','seniorcub','Desktop','BuggyBillions','BackEnd Class','Node Class','Day2','Path.txt'));

var cub = path.join('ubuntu','user','seniorcub','app.html')
console.log(cub);
// The name of the file
console.log(path.basename(cub));
// The directory name
console.log(path.dirname(cub));
// The extension name
console.log(path.extname(cub));
// JSON fomart of the path
console.log(path.parse(cub));