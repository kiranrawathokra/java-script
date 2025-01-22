function getAllSubstrings(str) {
    let substrings = [];
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
        }
    }
    
    return substrings;
}

// Example usage
console.log(getAllSubstrings("abc"));
// Output: ["a", "ab", "abc", "b", "bc", "c"]
