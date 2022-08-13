const timeTaken = callback => {
  console.time('timeTaken');
  const result = callback();
  console.timeEnd('timeTaken');
  return result;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
