let arr=[1,3,4,5,4,3,2],temp;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
      
    }
}

    console.log(" "+arr[0]);
