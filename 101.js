function isDigitsOnly(str) {
    return /^\d+$/.test(str);
}


console.log(isDigitsOnly("12345"));  //  true
console.log(isDigitsOnly("123a45")); //  false
console.log(isDigitsOnly(""));       //  false
