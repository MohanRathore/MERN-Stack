const path = require("path");
const express = require("express");
const app = express();

//console.log(path.join(__dirname, "/public"));
const staticPath = path.join(__dirname, "/public");

// builtin middle 
app.use(express.static(staticPath));

app.get("/", (req,res)=> {
    res.send("Hello Mohan this is from express");
});

app.get("/about", (req,res)=> {
    res.send("Hello Mohan this is about  express");
});

app.listen(8000,()=>{
    console.log(`listing at port 8000`);
});