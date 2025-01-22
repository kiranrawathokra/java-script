function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Random index from 0 to i
        [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements at i and j
    }
    return arr;
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
console.log(shuffleArray(numbers));  // Output: A shuffled version of the array, e.g., [4, 1, 5, 3, 2]
