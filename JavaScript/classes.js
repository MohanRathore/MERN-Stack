//Classes in java script
class Car {
    constructor(name)
    {
        this.name = name;
    }
    present() {
        return `I have ${this.name} car and i love my car`;
    }
}



//Inheritance

class Model extends Car{
    constructor(name,mod) {
        super(name);
        this.mod = mod;
    }
    show() {
        return `${this.present()}, and its a ${this.mod}!!`;
    }
}

let myCar = new Model("ford","Mustang");

console.log(myCar.name);
console.log(myCar.present());
console.log(myCar.show());
