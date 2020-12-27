const fs = require("fs");

fs.writeFileSync("temp.txt","This is first line of the file");

fs.appendFileSync("temp.txt","Mohan hate tanisha");

const str = fs.readFileSync("temp.txt","utf-8");

console.log(str);

fs.renameSync("temp.txt","mohan.txt");

fs.unlinkSync("mohan.txt");

fs.rmdirSync("../thapa");