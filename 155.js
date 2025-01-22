function calculateroot(num){
    if(typeof num!=='number' || typeof isNaN(num)){
        throw new console.error("must be inpput no right");
    }
    if(num<0){
        throw new error("negetive value not allowed");
    }
    return Math.sqrt(num);
}
try{
  console.log(calculateroot(12));
  console.log(calculateroot(-9));
}
catch(error){
    console.log(error.message);
}