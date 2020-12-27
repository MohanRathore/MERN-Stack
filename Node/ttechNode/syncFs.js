console.log("Mohan Kumar");

const fs = require("fs");

// Creating a file
fs.writeFileSync("temp.txt","Hey this is me Mohan");

//writing in file ----this will clear previous data nd add new data
fs.writeFileSync("temp.txt","Tanisha love me");

//Appending in file
fs.appendFileSync("temp.txt"," Mohan love tanisha too");

//reading a file  we get buffer data as output but we dont have buffer in javascript
let str = fs.readFileSync("temp.txt");
console.log(str.toString());






