function isSubset(superset, subset) {
    return subset.every((element) => superset.includes(element));
  }

  let superset = [1, 2, 3, 4, 5];
  let subset1 = [2, 3, 4];
  let subset2 = [2, 6];
  
  console.log(isSubset(superset, subset1)); // true
  console.log(isSubset(superset, subset2)); // false
  