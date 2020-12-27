const fs =  require("fs");

fs.writeFile("temp.txt","This is async version of fs", (err) => {
    console.log("Completed");
    console.log(err);
});

fs.appendFile("temp.txt"," This is next line", (err) => {
    console.log("Task completed");
});

fs.readFile("temp.txt","UTF-8",(err,data) => {
    console.log(data);
});