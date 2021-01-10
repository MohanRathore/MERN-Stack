// get the extension of file name

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("idex.html"));
console.log(getFileExtension("idex.js"));