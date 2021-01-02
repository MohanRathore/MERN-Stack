var x = 10;
var y = 20;
var z = x + y;
// console.log(z);
// console.log(x>y);
// console.log(x<y);
// console.log(typeof(z));

// switch (z) {
//     case 30:
//         console.log("greater then or equal to 30");
//         break;
//     default:
//         console.log("less then 10")
//         break;
// }

let arr = new Array();
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);

for (num in arr)
{
    console.log(`for index ${num} value is ${arr[num]}`);
}