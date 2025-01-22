function removeDuplicates(arr) {
    let uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}
let myArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

let uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]
