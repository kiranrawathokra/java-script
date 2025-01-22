function filterArray(num,callback){
    let arr=[];
    for(let i=0;i<num.length;i++){
        if(callback(num[i])){
            arr.push(num[i]);
        }
    }
    return arr;
}

function isEven(num){
    return num%2==0;
}
let arr=[1,2,3,4,5,6,7];
console.log(filterArray(arr,isEven));