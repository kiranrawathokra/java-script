function truncateString(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

// Example usage
console.log(truncateString("Hello, world!", 5));  // "Hello..."
console.log(truncateString("JavaScript", 10));    // "JavaScript" (no truncation)
console.log(truncateString("Truncate this text", 8)); // "Truncate..."
