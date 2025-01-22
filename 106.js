function findSubstringIndex(str, subStr) {
    return str.indexOf(subStr);
}

// Example usage
console.log(findSubstringIndex("hello world", "world")); // 6
console.log(findSubstringIndex("javascript", "script")); // 4
console.log(findSubstringIndex("hello world", "js")); // -1 (not found)
