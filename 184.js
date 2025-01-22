// Function to fetch user data
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Kiran Rawat" });
        }, 2000);
    });
}

// Function to fetch account balance
function fetchAccountBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ balance: 5000 });
        }, 1500);
    });
}

// Function to fetch transaction history
function fetchTransactionHistory() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["₹2000 - Debit", "₹1500 - Credit", "₹500 - Debit"]);
        }, 1000);
    });
}

// Using Promise.all() to execute all promises in parallel
console.log(" Fetching all data...");

Promise.all([fetchUserData(), fetchAccountBalance(), fetchTransactionHistory()])
    .then(([userData, accountBalance, transactionHistory]) => {
        console.log(" User Data:", userData);
        console.log(" Account Balance:", accountBalance);
        console.log("Transaction History:", transactionHistory);
    })
    .catch((error) => console.error(" Error fetching data:", error));
