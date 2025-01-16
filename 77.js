function getUniquePermutations(str) {
    let permutations = getPermutations(str);
    return [...new Set(permutations)];
  }
  
  console.log(getUniquePermutations("aab")); 
  