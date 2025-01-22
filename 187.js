function connectToDatabase() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Connected to the database"), 1000);
    });
}

function fetchUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: userId, name: "Kiran Rawat", email: "kiran@example.com" }), 1000);
    });
}

function fetchUserOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ orderId: 101, amount: 500 }, { orderId: 102, amount: 1500 }]), 1000);
    });
}

function closeDatabaseConnection() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(" Database connection closed"), 1000);
    });
}

async function performDatabaseOperations(userId) {
    try {
        console.log("Starting database operations...");

        const connectMessage = await connectToDatabase();
        console.log(connectMessage);

        const userData = await fetchUserData(userId);
        console.log("User Data:", userData);

        const userOrders = await fetchUserOrders(userId);
        console.log("User Orders:", userOrders);

        const closeMessage = await closeDatabaseConnection();
        console.log(closeMessage);

        console.log(" All database operations completed successfully.");
    } catch (error) {
        console.error(" An error occurred during database operations:", error);
    }
}

performDatabaseOperations(1);
