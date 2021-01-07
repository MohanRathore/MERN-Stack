let obj = {
    name : "mohan",
    greet : function(str){
        this.greet=str;
    },
    fullname : function(){
        return `Hello ${this.name}`;
    }
};


obj.age = 34;
obj.school = "mahindra";
console.log(obj.name);

for(let key in obj) {
    console.log(`for ${key} value is ${obj[key]}`);
}

obj.greet("happy birthday mohan");
console.log(obj.greet);
console.log(obj.fullname());