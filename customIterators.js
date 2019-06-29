const myObject = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let index = 0;
    return {
      next: () => 
        (index < keys.length) ? {
          done: false,
          value: this[keys[index++]]
        } : {
          done: true,
          value: undefined
        },
    };
  },
};

for (const iterator of myObject) {
  console.log(iterator);
}