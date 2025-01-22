function frequencyCount(str) {
    var s= str.split(' ');
    let count =0;
    let myMap =new Map();
    for(let i of s){
        count=0;
    if(myMap.has(i)){
        count++;
    }
    myMap.set(i,count);       
    }
    return myMap;
}

let str = "who are you";
console.log(frequencyCount(str));