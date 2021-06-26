function partition(array, start, end) {
    // Taking the last element as the pivot
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
        }
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]]
    return pivotIndex;
};

function quickSort(array, start = 0, end = array.length - 1) {
    if (start >= end) {
        return;
    }

    let index = partition(array, start, end);

    quickSort(array, start, index - 1);
    quickSort(array, index + 1, end);
}

function quickSort(array) {
    let stack = [];

    stack.push(0);
    stack.push(array.length - 1);

    while (stack[stack.length - 1] >= 0) {
        const end = stack.pop();
        const start = stack.pop();
        const pivotIndex = partition(array, start, end);
        
        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }
        
        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}

const array = [21, 54, 87, 23, 10, 44];
quickSort(array);
console.log(array);
