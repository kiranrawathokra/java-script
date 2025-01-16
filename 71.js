let num=9875,rem;
let temp=num;
while(true){
   let sum=0;
while(num>0){
    rem=num%10;
    sum+=rem;
    num=num/10;
   
}
if(sum<10){
    console.log("sum"+sum);
    break;
}
num=sum;
}