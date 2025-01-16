let number=121,sum=0;
let orignalNumber=number;
while(number>0){
    let rem = number % 10; 
    sum = sum * 10 + rem;  
    number = Math.floor(number / 10); 

}
if(sum==orignalNumber){
    console.log("this is pelindrom nuber");
}else{
    console.log("this is not pelindrom nuber");

}

