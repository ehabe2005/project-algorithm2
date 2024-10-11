function numbers(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
           
            if (arr[j] > arr[j + 1]) {
                var x = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = x;
            }
        }
    }

    return arr;
}

console.log(numbers([12, 11, 13, 5, 6,7,1]));