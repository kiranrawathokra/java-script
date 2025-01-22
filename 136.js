let set1 = new Set([1, 2, 3]);
let set2 = new Set([1, 2, 3, 4, 5]);

console.log(isSubset(set1, set2)); // Output: true (set1 is a subset of set2)

let set3 = new Set([1, 6]);
console.log(isSubset(set3, set2)); // Output: false (set3 is not a subset of set2)
function isSubset(setA, setB) {
    return [...setA].every(item => setB.has(item));
}
