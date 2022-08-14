const without = (array, ...args) => array.filter(item => !args.includes(item));

without([2, 1, 2, 3], 1, 2);
