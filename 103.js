//heck if a string ends with a specific substring.
function endsWithSubstring(str, suffix) {
    return str.endsWith(suffix);
}

// Example usage
console.log(endsWithSubstring("hello world", "world")); // true
console.log(endsWithSubstring("hello world", "hello")); // false
console.log(endsWithSubstring("javascript.js", ".js")); // true
