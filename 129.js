function splitArray(arr, index) {
    return [arr.slice(0, index), arr.slice(index)];
}
let myArray = [1, 2, 3, 4, 5];

let [part1, part2] = splitArray(myArray, 3);

console.log(part1); // Output: [1, 2, 3]
console.log(part2); // Output: [4, 5]
