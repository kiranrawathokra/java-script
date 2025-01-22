/*
"      *
     ***
    *****
   ******* "
   */
   for (let i = 1; i <= 5; i++) {
    let row = "";  
    
    for (let j = 5; j > i; j--) {
        row += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }

    console.log(row); 
}
