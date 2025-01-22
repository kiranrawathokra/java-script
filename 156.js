function countdown(seconds, callback) {
    let interval = setInterval(() => {
        if (seconds > 0) {
            console.log(`Time left: ${seconds} seconds`);
            seconds--;
        } else {
            clearInterval(interval); // Stop the timer
            callback(); 
        }
    }, 1000);
}

// Example usage:
countdown(5, () => {
    console.log("Countdown finished!");
});
