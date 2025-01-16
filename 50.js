function fact(n){
    let f=1;
    for(let i=1;i<=n;i++){
     f=f*i;
    }
    return f;
}
let n = 145 ; 
let num= n ;
let r;
let sum=0;
    while(n>0)
    {
        r=parseInt(n%10);
        sum+=fact(r);
        n=parseInt(n/10);
    }

   if(sum == num){
    console.log( "strong number");
   }


   else{
    console.log( "not strong number");
   }