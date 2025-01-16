let arr1 = [1, 3, 23, 2, 1], temp = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
}

console.log("Smallest number:", arr1[0]);
console.log("Largest number:", arr1[arr1.length - 1]);
