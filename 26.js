function simplifyFraction() {
    let a= 12
    let b= 21;

    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    
    a/= gcd;
    b /= gcd;

    console.log(a+":"+b);
}