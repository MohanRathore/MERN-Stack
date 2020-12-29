const { ok } = require("assert");
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName",()=>{
    console.log("your name is mohan")
});
event.on("sayMyName",()=>{
    console.log("your name is Kumar")
});
event.on("sayMyName",(sc,msg)=>{
    console.log(`your name is Rathore status is ${sc} and msg is ${msg}`);
});

event.emit("sayMyName",200,"ok");

