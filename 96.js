let str="kiran rawat";
let len=str.length,count=0;
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++)
    if(str.charAt(i)==str.charAt(j)){
        count++;
    }
}
console.log(str.charAt(i)+" "+count);