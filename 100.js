function isDigitsOnly(str) {
    return /^\d+$/.test(str);
}


console.log(isDigitsOnly("12345")); // true
console.log(isDigitsOnly("123a5")); // false
console.log(isDigitsOnly(""));      // false (empty string)
