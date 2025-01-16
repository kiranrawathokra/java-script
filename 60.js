let n = 153 ; 
let num= n ;
let r;
let sum=0;
    while(n>0)
    {
        r=parseInt(n%10);
        sum+=r*r*r;
        n=parseInt(n/10);
    }

   if(sum == num){
    console.log( "armstrong number");
   }


   else{
    console.log( "not armstrong number");
   }