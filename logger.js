const logger = (strings, ...values) => {
  let str = "";
  for (let i = 0; i < strings.length; i++) {
    const valueElement = values[i - 1];
    const stringElement = strings[i];

    if (i > 0) {
      if (valueElement && typeof valueElement === "object") {
        if (valueElement instanceof Error) {
          if (valueElement.stack) {
            str += valueElement.stack;
            continue;
          }
        } else {
          try {
            str += JSON.stringify(valueElement)
            continue;
          } catch (error) {}
        }
      }
      str += valueElement;
    }
    str += stringElement;
  }
  return str;
};

const v = 42;
const o = {
  a: 1,
  b: [2, 3, 4],
};

console.log(logger`Value: ${v} | Object: ${o}`);

/* 
try {
  nothing();
} catch (error) {
  console.log(logger`Caught: ${error}`);
} 
*/
