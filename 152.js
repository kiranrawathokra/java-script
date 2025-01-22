function divisor(a,b){
    if(typeof a!=='number' || typeof b!=='number')
{       
     throw new Error("both must be input number");
} if(b===0)
    {
    throw new Error("divisible 0 not allow");
} 

    return a/b;
}
try{
    console.log(divisor(10,5));
    console.log(divisor(12,0));
}
catch(error){
    console.error(error.message);
}
