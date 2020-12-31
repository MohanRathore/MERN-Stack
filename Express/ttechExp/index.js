
const express = require("express");
const express = require("path");
const express = require("hbs");



const app = express();

const port = 8000;

const viewPath = path.join(__dirname,"/templates/partials")
app.set("view engine","hbs");
app.set("views",viewPath)
//template engine route
app.get("",(req,res)=>{
    res.render('index.hbs')
});
app.get("/",(req,res)=>{
    res.send("Hello from the server");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});