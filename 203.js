console.log("\nFirst Pattern:\n");
for (var i = 1; i <= 5; i++) {
    let row = "";
    for (var j = 1; j <= 9; j++) {
        if (i - j == 0 || i + j == 10 || i == 1) {
            row += "*";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}