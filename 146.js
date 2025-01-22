let map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
]);

let result = map.delete('age'); 

console.log(map);  
console.log(result);  
let result2 = map.delete('country');
console.log(result2);