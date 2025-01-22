function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Example usage
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(intersection([1, 5, 7], [5, 7, 9])); // [5, 7]
console.log(intersection([10, 20, 30], [40, 50, 60])); // []
