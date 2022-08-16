const deepFlatten = array => [].concat(...array.map(element => (Array.isArray(element) ? deepFlatten(element) : element)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
