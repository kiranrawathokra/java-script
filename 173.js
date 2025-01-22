function countdowntimer(second,collback){
    let intervel=setInterval(() => {
        
        console.log(second);
        second--;
        if(second>0){
            collback();
            clearInterval(intervel);
        
        }
    }, 4000);
}
function oncountdown(){
    console.log("countdown succes");
}
console.log(countdowntimer(5,oncountdown));