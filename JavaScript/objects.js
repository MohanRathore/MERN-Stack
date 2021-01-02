//creating object using object literals
let obj = {
    name : "Mohan",
    age : 24,
    developer : true
}

console.log(obj);

//by creating an instance

let obj2 = new Object();
obj2.name = "Tanisha";
obj2.age = 23;
obj2.developer = false;

console.log(obj2);

//by creating object constructor
function obj3(name,age,developer) {
    this.name = name;
    this.age= age;
    this.developer = developer;
    
}

let moh = new obj3("surabhi",24,false);

console.log(moh);
console.log(obj2.values);
