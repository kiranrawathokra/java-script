function intersectionSets(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}
let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4, 5, 6, 7]);

let intersection = intersectionSets(set1, set2);
console.log(intersection); // Output: Set {3, 4, 5}
