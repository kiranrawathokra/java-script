
let number = 17; 
let originalNumber = number;

while (true) {
    let sum = 0;

    while (number > 0) {
        let rem = parseInt(number % 10); 
        sum += rem * rem;  
        number = parseInt(number / 10); 
    }

    if (sum === 1) {
        console.log(originalNumber + " is a happy number");
        break;
    }
    
    if (sum === 4) {
        console.log(originalNumber + " is not a happy number");
        break;
    }

    number = sum;
}
