function hasKey(map, key) {
    return map.has(key); 
}

let map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);

let result = hasKey(map, 'age'); 
console.log(result);  

let result2 = hasKey(map, 'country');
console.log(result2);