function differenceSets(setA, setB) {
    return new Set([...setA].filter(item => !setB.has(item)));
}
let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4, 5, 6, 7]);

let difference = differenceSets(set1, set2);
console.log(difference); // Output: Set {1, 2} (Elements in set1 but not in set2)

let difference2 = differenceSets(set2, set1);
console.log(difference2); // Output: Set {6, 7} (Elements in set2 but not in set1)
