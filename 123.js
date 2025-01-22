function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        // Swap elements at start and end
        [arr[start], arr[end]] = [arr[end], arr[start]];
        
        // Move start forward and end backward
        start++;
        end--;
    }
    
    return arr;
}

// Example usage
let myArray = [1, 2, 3, 4, 5];
let reversed = reverseArray(myArray);
console.log(reversed);  // Output: [5, 4, 3, 2, 1]
