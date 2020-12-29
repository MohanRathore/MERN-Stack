const bioData = {
    name : "Mohan",
    age : 24,
    girlfriend : true
};

console.log(bioData.name)
console.log(bioData.girlfriend)


// Converting object in json object

const jsondata = JSON.stringify(bioData);
console.log(jsondata);
console.log(jsondata.name);  // cannot call data using . just like objects

// coverting json to object

const objData = JSON.parse(jsondata);
console.log(objData);
console.log(objData.name);

