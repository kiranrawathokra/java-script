// Simulated user account
const userAccount = {
    name: "Kiran Rawat",
    balance: 5000, // Initial balance
};

// Function to check balance
function checkBalance(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAccount.balance >= amount) {
                resolve(" Balance is sufficient.");
            } else {
                reject("Insufficient balance.");
            }
        }, 1000);
    });
}

// Function to withdraw money
function withdrawMoney(amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            userAccount.balance -= amount;
            resolve(`${amount} withdrawn successfully.`);
        }, 1000);
    });
}

// Function to display remaining balance
function displayBalance() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Remaining Balance: ₹${userAccount.balance}`);
        }, 1000);
    });
}

// Simulating a banking transaction
function bankTransaction(amount) {
    console.log("Transaction in progress...");

    checkBalance(amount)
        .then(() => withdrawMoney(amount))
        .then((message) => {
            console.log(message);
            return displayBalance();
        })
        .then((balanceMessage) => console.log(balanceMessage))
        .catch((error) => console.error(error));
}

// Example transaction: Withdraw ₹3000
bankTransaction(3000);
