function decimalToBinary(n) {
    if (n === 0) return "0";
    if (n === 1) return "1";
  
    return decimalToBinary(Math.floor(n / 2)) + (n % 2).toString();
  }
  
  let number = 18;
  let binaryRepresentation = decimalToBinary(number);
  console.log("`The binary"+number+"is"+binaryRepresentation);
  