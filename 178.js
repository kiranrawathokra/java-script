
function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved: 3 seconds delay completed!");
        }, 3000);
    });
}

delayedMessage().then((message)=>
  console.log(message));

