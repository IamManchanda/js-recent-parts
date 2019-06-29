const numbers = {
	*[Symbol.iterator]({
		start = 0,
		stop = 100,
		step = 1,
	} = {}) {
		for (let num = start; num <= stop; num += step) {
			yield num;
		}
	}
};

const allNumbers = numbers[Symbol.iterator]();
const luckyNumbers = numbers[Symbol.iterator]({
  start: 6,
  stop: 30,
  step: 4,
});

console.log(`All numbers are: ${[...allNumbers]}`);
console.log(`My lucky numbers are: ${[...luckyNumbers]}`);
