let number=121,sum=0;
let orignalNumber=number;
while(number>0){
    let rem = number % 10; 
    //sum+= rem; 
    sum++; 
    number = Math.floor(number / 10); 

}
console.log(sum)