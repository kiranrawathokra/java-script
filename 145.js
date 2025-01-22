// Function to iterate over a Map and print key-value pairs
function printMap(map) {
    map.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

let map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);

console.log(map);
