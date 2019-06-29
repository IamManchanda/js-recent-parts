const myObject = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (const key of Object.keys(this)) {
      yield { [key]: this[key] };
    }
  },
};

console.log([...myObject]);
