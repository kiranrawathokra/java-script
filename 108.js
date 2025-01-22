function padWithZeroes(str, length) {
    return str.toString().padStart(length, '0');
}

// Example usage
console.log(padWithZeroes("123", 6)); // "000123"
console.log(padWithZeroes("45", 4));  // "0045"
console.log(padWithZeroes("98765", 3)); // "98765" (no padding needed)
