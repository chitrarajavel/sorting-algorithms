function bubbleSort(arr) {
    // let myArr = [1, 4, 2, 3, 8];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            //swap values
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;
