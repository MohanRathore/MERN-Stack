const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.write("<h1>Welcome to home page</h1>");
    res.write("<h2>Welcome to home page again</h2>");
    res.send();
});

app.get("/about", (req,res) => {
    res.send("Welcome to about page");
});

app.get("/contact", (req,res) => {
    res.json([{
        name : "mohan",
        lastname : "kumar",
        age : 24
    },{
        name : "mohan",
        lastname : "kumar",
        age : 24
    },{
        name : "mohan",
        lastname : "kumar",
        age : 24
    }]);
});

app.listen(8000, ()=>{
    console.log("listening on port 8000")
});
