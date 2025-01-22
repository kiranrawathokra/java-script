function registerUser(name, email, password, callback) {
    console.log("Registering user...");
    setTimeout(() => {
        console.log(`User ${name} registered successfully.`);
        callback(name, email);
    }, 2000); // Simulating async operation
}

function sendVerificationEmail(name, email, callback) {
    console.log("Sending verification email...");
    setTimeout(() => {
        console.log(`Verification email sent to ${email}.`);
        callback(name);
    }, 2000);
}

function showWelcomeMessage(name) {
    console.log("Processing final step...");
    setTimeout(() => {
        console.log(`Welcome, ${name}! Your account is now active.`);
    }, 2000);
}

// Simulating user registration process with nested callbacks
registerUser("Kiran Rawat", "kiran@example.com", "securePassword123", (name, email) => {
    sendVerificationEmail(name, email, (name) => {
        showWelcomeMessage(name);
    });
});
