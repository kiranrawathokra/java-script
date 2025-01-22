for (var i = 1; i <= 9; i++) {
    let row = "";
    for (var j = 1; j <= 9; j++) {
        if ((i - j == 0 && j < 5) || i + j == 10) {
            row += " *";
        } else {
            row += "  "; // Using spaces for console alignment
        }
    }
    console.log(row);
}
