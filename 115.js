function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    
    // Compare elements of both arrays and merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    // If there are remaining elements in arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    // If there are remaining elements in arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    return mergedArray;
}

// Example usage
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 10, 20], [5, 15, 25])); // [1, 5, 10, 15, 20, 25]
