//files 
const fs = require('fs');


//reading files
let filecontents = fs.readFileSync('f1.txt');

//buffer format
console.log(filecontents);
//string format
console.log('data of file 1 ->' + filecontents);

//writing files

fs.writeFileSync('f2.txt', 'This is file 2');
console.log('data of file 2 ->' + fs.readFileSync('f2.txt'));


//append a file  

fs.appendFileSync('f3.txt', 'This is appended text');
console.log('data of appended file ->' + fs.readFileSync('f3.txt'));

//delete a file

fs.unlinkSync('f4.txt');

