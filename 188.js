async function factorial(n) {
    if (n < 0) 
{        
 throw new Error(" Factorial is not defined for negative numbers.");
}    if (n === 0 || n === 1) return 1; // Base case

    return n * await factorial(n - 1); // Recursive case
}

// Execute the async function
async function runFactorialCalculation(num) {
    try {
        const result = await factorial(num);
        console.log("the fectoreal"+num +"is"+result);
    } catch (error) {
        console.error(error.message);
    }
}

runFactorialCalculation(5);
