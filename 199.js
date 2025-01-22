

for (let i = 1; i <= 5; i++) {
    let row = " ".repeat(5 - i); 
    let num = i; 

    for (let j = 1; j <= i; j++) {
        row += num++;
    }

    num -= 2;
    for (let j = 1; j < i; j++) {
        row += num--;
    }

    console.log(row);
}
