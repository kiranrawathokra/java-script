for (var i = 1; i <= 7; i++) {
    let row = "";
    for (var j = 1; j <= 9; j++) {
        if (i + j == 10 || i == 1 || i == 7) {
            row += "*";
        } else {
            row += "  "; // Using spaces for proper alignment in the console
        }
    }
    console.log(row);
}
