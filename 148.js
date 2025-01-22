function updateMapValue(map, key, newValue) {
    if (map.has(key)) {
        map.set(key, newValue);  // Update the value for the key
        console.log(`Updated value for key '${key}': ${newValue}`);
    } else {
        console.log(`Key '${key}' not found in the map.`);
    }
}
let map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);
updateMapValue(map, 'age', 31);  // Output: Updated value for key 'age': 31

updateMapValue(map, 'country', 'USA');  // Output: Key 'country' not found in the map.

console.log(map);  // Output: Map { 'name' => 'John', 'age' => 31, 'city' => 'New York' }

