function performopretion(a,b,collback,collback1){
var x= collback(a,b);
var y= collback1(a,b);
console.log(x);
console.log(y);
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(performopretion(2,3,add,sub));
//console.log(performopretion(2,3,sub))

