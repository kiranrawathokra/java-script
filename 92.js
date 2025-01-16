let name = "kiran", count = 0;
let n = name.length;
for (let i = 0; i < n; i++) { 
  let char = name[i].toLowerCase(); 
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    count++;
  }
}
console.log(count); 
