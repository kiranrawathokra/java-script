let obj = { name: "John", age: 30, city: "New York" };

let map = new Map(Object.entries(obj));

console.log(map);  

console.log(map.get("name"));