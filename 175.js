function iterateArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr); 
    }
}

function double(num) {
    console.log(num * 2);
}

const numbers = [1, 2, 3, 4, 5];
iterateArray(numbers, double);
