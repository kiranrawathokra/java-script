/*
"       1
      12
    123
  1234
12345 "
*/
for (let i = 1; i <= 5; i++) {
  let row = ""; 
  
  for (let k = 5; k > i; k--) {
      row += " ";
  }

  for (let j = 1; j <= i; j++) {
      row += j;
  }

  console.log(row); 
}

