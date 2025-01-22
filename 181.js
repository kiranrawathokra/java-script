// Function that returns a promise to fetch user data
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched user data");
            resolve({ id: 1, name: "Kiran Rawat" }); // Simulated user data
        }, 1000);
    });
}

// Function that returns a promise to process user data
function processUserData(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing user data...");
            user.processed = true;
            resolve(user);
        }, 1000);
    });
}

function displayUserData(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`User Data: ID = ${user.id}, Name = ${user.name}, Processed = ${user.processed}`);
            resolve("Data displayed successfully");
        }, 1000);
    });
}

// Promise chaining
fetchUserData()
    .then(processUserData)
    .then(displayUserData)
    .then((message) => console.log(message)) 
    .catch((error) => console.error("Error:", error)); 
