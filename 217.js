console.log("\nPattern:\n");
for (var i = 1; i <= 6; i++) {
    let row = "";

    for (var j = 1; j <= 6; j++) {
        if (i == 1 || i == 6 || j == 7 - i) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
