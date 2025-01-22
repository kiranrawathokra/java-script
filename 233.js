onsole.log("\nThird Pattern:\n");
for (var i = 1; i <= 5; i++) {
    let row = "";
    for (var j = 1; j <= 9; j++) {
        if (i - j == 0 || i + j == 10 ) {
            row += "*";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}
for (var i = 5; i >= 1; i--) {
    let row = "";
    for (var j = 1; j <= 9; j++) {
        if (i - j == 0 || i + j == 10 ) {
            row += "*";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}