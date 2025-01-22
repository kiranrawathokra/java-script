function unreliableOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5; 
            success ? resolve(" Operation Successful!") : reject("Operation Failed.");
        }, 1000);
    });
}

function retryOperation(operation, retries) {
    return operation().catch((error) => {
        if (retries > 0) {
            console.log(` Retrying... Attempts left: ${retries}`);
            return retryOperation(operation, retries - 1);
        } else {
            throw error; 
        }
    });
}

// Execute the operation with up to 3 retries
retryOperation(unreliableOperation, 3)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
