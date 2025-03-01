function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// Example usage
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunked = chunkArray(myArray, 3);
console.log(chunked); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
