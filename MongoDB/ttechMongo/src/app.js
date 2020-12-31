const mongoose = require("mongoose");


//connection creation and database creation
mongoose.connect("mongodb://localhost:27017/ttchanell", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("Connection scucessfull"))
.catch((err)=> console.log(err));

//mongoose 