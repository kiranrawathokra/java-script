function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

// Example usage
let myArray = [1, 0, false, 2, null, 3, undefined, '', 4, NaN];
let cleanedArray = removeFalsyValues(myArray);
console.log(cleanedArray);  // Output: [1, 2, 3, 4]
