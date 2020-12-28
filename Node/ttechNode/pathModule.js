const path = require("path");

console.log(path.dirname('C:/Users/EHOMMU/Desktop/MERN Stack/Node/ttechNode/pathModule.js'));

console.log(path.extname('C:/Users/EHOMMU/Desktop/MERN Stack/Node/ttechNode/pathModule.js'));

console.log(path.basename('C:/Users/EHOMMU/Desktop/MERN Stack/Node/ttechNode/pathModule.js'));

console.log(path.parse('C:/Users/EHOMMU/Desktop/MERN Stack/Node/ttechNode/pathModule.js'));

const sturct = path.parse('C:/Users/EHOMMU/Desktop/MERN Stack/Node/ttechNode/pathModule.js');

console.log(sturct.name);
console.log(sturct.root);