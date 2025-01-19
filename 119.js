//Count the frequency of each element in an array.
let arr=[1,2,2,2,3,3,4];

for(let i=0;i<arr.length;i++){
    let freq=1;
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            freq++;
        }

    }
    if(arr.indexOf(arr[i]===i))
    {
        console.log(arr[i]+"="+freq);
    }

}

