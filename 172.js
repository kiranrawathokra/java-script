function sortstring(arr,collback){
    return arr.sort(collback);
}
let strarr=["kiran","sonu","sanju","pappu"];
 console.log(sortstring(strarr,(a,b)=>a.length-b.length));
 

