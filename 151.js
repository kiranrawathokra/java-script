function parsejson(jsonString){
    try{
        const result= JSON.parse(jsonString)
        return result;
   }catch(error){
    console.error("this invalid",error.message);
    return null;
   }
}
const jsonstring1='{"name":"kiran","age":22}';
const jsonstring2='{"name":"kiran","age":22';
console.log(parsejson(jsonstring1));
console.log(parsejson(jsonstring2));
