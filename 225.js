for (var i = 1; i <= 6; i++) {
    let row = "";
    for (var j = 1; j <= 4; j++) {
        if (j == 1 || i == 1 || i == 3 || (j == 4 && i < 4) || i == 2 + j) {
            row += " *";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}