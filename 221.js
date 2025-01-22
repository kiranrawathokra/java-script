console.log("\nPattern: K\n");
let size = 7; // Height of the letter "K"

for (let i = 0; i < size; i++) {
    let row = "* "; // Left vertical part of "K"

    for (let j = 0; j < size; j++) {
        if (i + j == size - 1 || i - j == 0 && i >= size / 2) {
            row += "* ";
        } else {
            row += "  "; // Spaces for proper alignment
        }
    }
    console.log(row);
}
