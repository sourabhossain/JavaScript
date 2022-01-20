class Range {
	constructor(to = 0, step = 1, from = 0) {
		this[Symbol.iterator] = function* () {
			let i = 0;
			const length = Math.floor((to - from) / step) + 1;

			while (i < length) yield from + i++ * step;
		};
	}
}

console.log([...new Range(5)]);
console.log([...new Range(5, 2)]);
console.log([...new Range(5, -2, 10)]);
console.log([...new Range(5, 1, 1)]);
