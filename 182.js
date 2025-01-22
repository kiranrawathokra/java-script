function chackaunthntication(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
    const valiuser={username:"kiran",password:"1234567"};
    if(username=== ValidityState.username && password===valide.password){
        resolve("success");
    }else{
        reject("fail");
    }     
            
        },3000);
})
}

chackaunthntication("kiran","1234567").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});