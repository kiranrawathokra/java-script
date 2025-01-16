let number=12,sum=0;
let orignalNumber=number;
while(number>0){
    let rem = number % 10; 
    sum+= rem;  
    number = Math.floor(number / 10); 

}
if(number%sum==0){
    console.log("divideble: "+sum+"with: "+orignalNumber)
}else{
    console.log("not divideble")
}