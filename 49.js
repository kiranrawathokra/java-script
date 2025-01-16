let number=6,i,sum=0;
for(i=1;i<number;i++){
    if(number%i==0){
        sum+=i
    }

}
if(sum==number){
    console.log("this is perfact number: "+sum);
}else{
    console.log("this is not perfact number: "+sum);

}