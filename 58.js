let a = 12;
let b = 18;

let tempA = a;
let tempB = b;

while (tempB !== 0) {
    let temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
}

let gcd = tempA;

let lcm = Math.abs(a * b) / gcd;

console.log("`The LCM of"+a+"and"+b+ "is"+lcm);
