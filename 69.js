function gcd(a, b) {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}

const num1 = 56;
const num2 = 98;
console.log("`The GCD of" +num1+ "and" +num2+ "is:"+ gcd(num1, num2));
