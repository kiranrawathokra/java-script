function arrayDifference(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

// Example usage
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

let difference = arrayDifference(array1, array2);
console.log(difference); // Output: [1, 2, 3]
