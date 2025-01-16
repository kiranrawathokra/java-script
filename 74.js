function isPalindrome(str) {
   
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    let reversedStr = cleanedStr.split("").reverse().join("");
    
    return cleanedStr === reversedStr;
  }
  
  // Test cases
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("No lemon, no melon")); // true
  console.log(isPalindrome("Hello, World!")); // false
  