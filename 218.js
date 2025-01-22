console.log("\nPattern 2:\n");
for (var i = 1; i <= 6; i++) {
    let row = "";
    for (var j = 1; j <= 4; j++) {
        if (i == 1 || j == 3 || i == 6) {
            row += " *";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}