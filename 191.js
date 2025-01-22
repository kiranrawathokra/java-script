async function riskyOperation() {
    throw new Error("Something went wrong!");
}

async function handleError() {
    try {
        console.log("Attempting risky operation...");
        await riskyOperation(); 
        console.log("Operation successful!"); 
    } catch (error) {
        console.error("Error caught:", error.message);
    }
}

handleError();
