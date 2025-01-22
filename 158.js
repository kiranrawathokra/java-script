function emptyinput(num){
if(num===null){
    throw new Error("empty input")
}
return num;
}
try{
    emptyinput(null);
}catch(e){
    console.log(e.message);
}
