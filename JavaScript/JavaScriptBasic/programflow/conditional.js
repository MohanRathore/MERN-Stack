//if else
let age =21;

if(age<18) {
    console.log("you are to young for driving");
} else if(age >18 && age <25) {
    console.log("you are too young for marriage");
} else {
    console.log("get married");
}


//ternary operatopr
// codition ? expression_if_true : expression_if_false;
age > 18 ? console.log("you are eligible for driving"):console.log("you are not eligiable for driving");

//switch case
let day = 7;
let dayname;

switch (day) {
    case 1:
        dayname = "sunday";
        break;
    case 2:
        dayname = "monday";
        break;
    case 3:
        dayname = "tuesday";
        break;      
    default:
        dayname = "otherday";
        break;
}

console.log(dayname);

// do while
do{
    console.log(day);
    day--;
}while(day>3);

//for loop
