function myForEach(data, callback) {
    for (const item of data) {
        callback(item);
    }
}

const data = [1, 2, 3, 4, 5];

myForEach(data, (item) => {
    console.log(item);
});