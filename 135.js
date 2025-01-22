function setToArrayAlternative(set) {
    return Array.from(set); // Using Array.from()
}
let mySet = new Set([1, 2, 3, 4, 5]);

let myArray = setToArray(mySet);
console.log(myArray); // Output: [1, 2, 3, 4, 5]

let anotherArray = setToArrayAlternative(mySet);
console.log(anotherArray); // Output: [1, 2, 3, 4, 5]
