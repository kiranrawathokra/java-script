function rotateArray(arr, n) {
    const len = arr.length;
    n = n % len;  // In case n is greater than array length
    return [...arr.slice(n), ...arr.slice(0, n)];
}

// Example usage
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
console.log(rotateArray([1, 2, 3, 4, 5], 7)); // [3, 4, 5, 1, 2] (same as rotating 2 times)
console.log(rotateArray([1, 2, 3, 4, 5], -2)); // [4, 5, 1, 2, 3] (negative rotation)
