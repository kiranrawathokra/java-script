function unionSets(setA, setB) {
    return new Set([...setA, ...setB]);
}
let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

let union = unionSets(set1, set2);
console.log(union); // Output: Set {1, 2, 3, 4, 5}
