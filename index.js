// console.log("it works");
// let x = require('./test-import.js'); //for one object
// const testimport = require('./test-import.js');
// console.log(testimport.x);
const fs = require('fs');
// const readme = fs.readFileSync("readme.txt","utf-8")
// // console.log(readme);

// fs.readFile("readme.txt","utf-8", (err,data)=>{
//   if(err) console.log(err);
//   console.log(data)
// });
// console.log("Next line of code");
// fs.readFile("readme2.txt","utf-8", (err,data)=>{
//   if(err) console.log(err);
//   console.log(data)
// });
// console.log("Next line of code");

const p1 = new Promise((resolve, reject) => {
  fs.readFile("readme.txt", "utf-8", (err, data) => {
    if(err) reject(err);
    console.log("readme read");
    resolve("readme read");
  });
});
const p2 = new Promise((resolve, reject) => {
  fs.readFile("readme2.txt", "utf-8", (err, data) => {
    if(err) reject(err);
    console.log("readme 2 read");
    resolve("readme2 read");
  });
});

Promise.all([p1, p2])
  .then(() => {
    console.log("both files have been read");
  })

console.log("Next line of code");
