function findPairs(arr, target) {
    let pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    
    return pairs;
}

// Example usage
let myArray = [1, 2, 3, 4, 5, 6];
let targetSum = 7;
let result = findPairs(myArray, targetSum);
console.log(result);  // Output: [[1, 6], [2, 5], [3, 4]]
