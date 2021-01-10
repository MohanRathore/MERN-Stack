const mathSequence = (arr) => {
    let arth = new Set();
    let geo = new Set();
    for(let i=1; i<arr.length; i++){
        let number1 = arr[i]-arr[i-1];
        arth.add(number1);
        let number2 = arr[i]/arr[i-1];
        geo.add(number2);
    } 
    if(arth.size === 1){
        return "Arithmatic series"
    } else if(geo.size ===1){
        return "Geomatric series"
    }else{
        return "-1";
    }
} 

console.log(mathSequence([2,4,6,8,10]));
console.log(mathSequence([3,9,27]));
console.log(mathSequence([2,5,10,13]));