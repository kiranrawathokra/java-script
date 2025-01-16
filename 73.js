function findNthTermGP(a, r, n) {
    if (n === 1) return a;
  
    return r * findNthTermGP(a, r, n - 1);
  }
  
  let firstTerm = 2;  
  let commonRatio = 3; 
  let termPosition = 5; 
  
  let nthTerm = findNthTermGP(firstTerm, commonRatio, termPosition);
  console.log(termPosition+"th term of the GP is"+ nthTerm);
  