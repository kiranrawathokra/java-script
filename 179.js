//Create a promise that rejects with an error 
//if a number is negative.

function delayedMessage() {
    let num=-2;
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(num<0)
{        
    reject("Promise rejected: Number is negative!");
}else{
    resolve("Promise resolved: Number is positive!");
}
     
  }, 3000);
    });
}

delayedMessage()
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});

