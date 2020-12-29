const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (res,req)=>{
    fs.readFile("input.txt",(err,data)=>{
        if(err)
            return console.error(err);
        res.end("Mohan");
    });
});

server.listen(8000,"127.0.0.1",)