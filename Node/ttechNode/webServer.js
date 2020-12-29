const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/")
    {
        res.end("This is home page");
    }
    else if(req.url == "/about")
    {
        res.end("This is about page");
    }
    else{
        res.writeHead(404, {"Content-Type" : "plain/html"})
        res.end("<h1>404, Oooppss Error Occured</h1>");
    }
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("lisiting on port number 80");
});