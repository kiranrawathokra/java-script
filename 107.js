function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '');
}

// Example usage
console.log(removePunctuation("Hello, world! How's it going?")); // "Hello world Hows it going"
console.log(removePunctuation("Let's test: this function.")); // "Lets test this function"
console.log(removePunctuation("No punctuation here")); // "No punctuation here"
