console.log("\nPattern: M\n");

let size = 7; 

for (let i = 0; i < size; i++) {
    let row = "* "; 

    for (let j = 0; j < size; j++) {
        if (j == size - 1) {
            row += "* ";
        }
        else if (i == j && i <= size / 2) {
            row += "* ";
        }
        else if (i + j == size - 1 && i <= size / 2) {
            row += "* ";
        }
        else {
            row += "  ";
        }
    }

    console.log(row);
}
