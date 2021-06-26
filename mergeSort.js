function merge(left, right) {
    let array = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }

    return [...array, ...left, ...right];
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    const half = array.length / 2;
    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

console.log(mergeSort([21, 54, 87, 23, 10, 44]));
