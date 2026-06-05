const fs = require('fs');

// //Synchronous way to write file
// fs.writeFileSync('./prince.txt', 'Hello World!', );

// //Asynchronous way to write file
// fs.writeFile('./princeAsync.txt', 'Hello World Async!',(err) => {
// });

// //Synchronous way to read file
// const data = fs.readFileSync('./prince.txt', 'utf-8');
// console.log("Data from prince.txt: ", data);

//Asynchronous way to read file
// fs.readFile('./princeAsync.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log("Error reading file: ", err);
//     } else {
//         console.log("Data from princeAsync.txt: ", data);
//     }
// });

fs.appendFileSync("./prince.txt", `${Date.now()}This is an appended line.\n`)

fs.cpSync('./prince.txt', './princeCopy.txt');

fs.unlinkSync('./princeCopy.txt');

fs.statSync('./prince.txt');

// fs.mkdirSync('./newDir');


  