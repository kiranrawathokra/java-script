function containsValue(set, value) {
    return set.has(value);
}
let mySet = new Set([1, 2, 3, 4, 5]);

console.log(containsValue(mySet, 3)); // Output: true (3 is in the Set)
console.log(containsValue(mySet, 6)); // Output: false (6 is not in the Set)
