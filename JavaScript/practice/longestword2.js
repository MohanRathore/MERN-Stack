const longestword = (str) => {
    let words = str.split(" ");
    let size = 0;
    let max = [""];
    for(let i=0; i<words.length; i++) {
        if(words[i].length >= size) {
            size = words[i].length;
            if(max[max.length - 1].length < words[i]){
                max = [];
                max.push(words[i]);
            }
            else {
                max = [...max,words[i]];
            }
        }
    }
    return [...max];
}


console.log(longestword("hey man how's you doing"));
console.log(longestword("i love javascript"));