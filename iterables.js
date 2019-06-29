const myString = "Hello";
const myArray = ["W", "o", "r", "l", "d"];

const myStringIterator = myString[Symbol.iterator]();
const myArrayIterator = myString[Symbol.iterator]();

console.log("\n");

console.log("String");
for (const iterator of myString) {
  console.log(iterator);
}
console.log("\n");

console.log("String Iterator");
for (const iterator of myStringIterator) {
  console.log(iterator);
}
console.log("\n");

console.log("Array");
for (const iterator of myArray) {
  console.log(iterator);
}
console.log("\n");

console.log("Array Iterator");
for (const iterator of myArrayIterator) {
  console.log(iterator);
}
console.log("\n");
