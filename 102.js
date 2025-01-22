function extractNumbers(str) {
    return str.match(/\d+/g) || [];
}


console.log(extractNumbers("I have 2 apples and 3 bananas.")); // ["2", "3"]
console.log(extractNumbers("No numbers here!")); // []
console.log(extractNumbers("Order #1234, Code: 5678")); // ["1234", "5678"]
