let number=128,sum=0;
let orignalNumber=number;
while(number>0){
    let rem = number % 10; 
    sum = sum * 10 + rem;  
    number = Math.floor(number / 10); 

}
console.log("the revers stiring "+sum);