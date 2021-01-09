let str = "Hello Mohan Welcome to JavaScript tutorials";
str += "ye bhi add ho jayegaaisme";
console.log(str);
console.log(str.length);

// basic str info
// window line break \r\n
// unix line beak \n
// tab \t
// backslash 

//1 concatination

let str1 = "  mohan  ";
console.log(str1)
str1 = str1.trim();  /// trim(), trimStart(), trimENd()
let str2 = "Kumar";
str1 = str1.concat(str2);
console.log(str1);
console.log(str1.substr(1,4));
console.log(str1.substring(1,4));
console.log(str1.indexOf("m"));
console.log(str1.lastIndexOf("m"));