
function calculatesqure(num){
    if(num!=Number||isNaN(num)){
        throw new Error("this is not type of number");
    }
    return num*num;

}
try{
    console.log(calculatesqure(5));
    console.log(calculate("a"));
}
catch(error){
    console.error(error.message)
}



























// function swapKeyValue(map) {
//     let swappedMap = new Map();

//     for (let [key, value] of map) {
//         swappedMap.set(value, key);
//     }

//     return swappedMap;
// }

// // Example usage:
// let myMap = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3]
// ]);

// let swapped = swapKeyValue(myMap);
// console.log(swapped); // Output: Map { 1 => 'a', 2 => 'b', 3 => 'c' }
