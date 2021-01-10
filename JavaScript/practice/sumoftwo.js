const isEqualTo100 = (a,b)=> a===100 || b===100 || (a+b)===100;

console.log(isEqualTo100(10,10));
console.log(isEqualTo100(10,100));
console.log(isEqualTo100(100,100));
console.log(isEqualTo100(50,50));