function add(a,b) {
    return a+b;
}
function avg(a,b,fn) {
    return fn(a,b)/2;
}

console.log(avg(10,20,add));


// Anonymous functions in javascript
let show = function (){
    console.log("i am a anonymous function");
}
show();

// Immediatly invoked function

let person = {
    name : "mohan",
    age : 24
};
(function(){
    console.log(`Hi i am iffe and ${person.name} has age ${person.age}`);
})(person);