function mergeMaps(map1, map2) {
    let mergedMap = new Map(map1);
    map2.forEach((value, key) => {
        mergedMap.set(key, value);
    });
    return mergedMap;
}
let map1 = new Map([
    ['name', 'John'],
    ['age', 30]
]);
let map2 = new Map([
    ['city', 'New York'],
    ['country', 'USA']
]);
let mergedMap = mergeMaps(map1, map2);
console.log(mergedMap);