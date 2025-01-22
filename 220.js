console.log("\nPattern: K\n");

let size = 7; // Height of the letter K

for (let i = 0; i < size; i++) {
    let row = "* "; // The left vertical part of "K"
    
    // Create the diagonal part of "K"
    if (i < size / 2) {
        row += " ".repeat((size - i - 1) * 2) + "*";
    } else if (i > size / 2) {
        row += " ".repeat(i * 2 - size + 1) + "*";
    }

    console.log(row);
}
