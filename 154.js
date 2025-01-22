function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (typeof email !== 'string') {
        throw new Error("Email must be a string");
    }

    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
    }

    return "Valid email address";
}

try {
    console.log(validateEmail("test@example.com")); 
    console.log(validateEmail("invalid-email"));    
} catch (error) {
    console.error(error.message);
}
