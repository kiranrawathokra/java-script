for (var i = 1; i <= 7; i++) {
    let row = "";
    for (var j = 1; j <= 6; j++) {
        if (
            ((i == 1 || i == 6) && j > 1 && j < 5) || 
            (j == 1 && i > 1 && i < 6) || 
            (j == 5 && i > 1 && i < 6)
        ) {
            row += " *";
        } else {
            row += "  "; // Using spaces for console alignment
        }
    }
    console.log(row);
}
