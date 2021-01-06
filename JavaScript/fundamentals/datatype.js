let counter;
console.log(counter);
console.log(typeof(counter));

let obj = null;
console.log(obj);
console.log(typeof(obj));

console.log(null==undefined);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

//symbol type
let s1 = Symbol();
let s2 = Symbol();
console.log(s1==s2);

let contact = {
    fname : "Mohan",
    Lname : "Kumar",
    email : "abc@xyz.com",
    phone : 988802557,
    address : {
        galino : 18,
        house : 02156,
        nagar : "sas nagar"
    }
};

console.log(contact.address.galino);

//Number
let num = new Number(100);
console.log(num.valueOf());
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(16));
console.log(typeof(num));