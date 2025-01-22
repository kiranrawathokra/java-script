function findMedian(arr) {
    arr.sort((a, b) => a - b);  // Sort the array in ascending order
    const mid = Math.floor(arr.length / 2);  // Find the middle index
    
    if (arr.length % 2 !== 0) {
        return arr[mid];  // If the array length is odd, return the middle element
    } else {
        return (arr[mid - 1] + arr[mid]) / 2;  // If even, return the average of the two middle elements
    }
}

// Example usage
let numbers = [12, 4, 5, 3, 8, 7];
console.log(findMedian(numbers));  // Output: 5.5 (since after sorting [3, 4, 5, 7, 8, 12], median is (5 + 6) / 2)
