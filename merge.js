function merge(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i]);
            i++;
        }
    }

    if (i < arr1.length) {
        newArr.push(...arr1.slice(i));
    }
    if (j < arr2.length) {
        newArr.push(...arr2.slice(j));
    }

    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.ceil(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));

    return merge(arr1, arr2);
}

module.exports = {merge, mergeSort};
