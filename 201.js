for (var i = 9; i >= 2; i -= 2) {
    let row = "";  // Initialize an empty string

    for (var j = 1; j <= 9 - i; j++) {
        row += " ";
    }

    for (var j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row); 
}

for (var i = 1; i <= 9; i += 2) {
    let row = ""; 

    for (var j = 1; j <= 9 - i; j++) {
        row += " ";
    }

    for (var j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row); 
}
