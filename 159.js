function arrtypechack(arr){
    if(!Array.isArray(arr)){
        throw new Error("that is no arr");
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true
}
try{
    let arr=[1,2,3,4,5],num=12;
    console.log(arrtypechack(arr));
    console.log(arrtypechack(num));

}catch(err){
    console.error(err.message);
}

