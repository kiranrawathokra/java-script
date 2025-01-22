//Implement a function to convert a string to uppercase. Throw an error if the input is not a string.
function astringtoupper(str){
if(typeof str!=='string'||str==" "){
    throw new Error("must be input is not string");
}
return str.toUpperCase();
}
try{
    console.log(astringtoupper("ram"));
    console.log(astringtoupper(5));
}catch(error){
    console.error(error.message)

}