const formatCurrency = (strings, ...values) => {
  let str = "";
  for (let i = 0; i < strings.length; i++) {
    const valueElement = values[i - 1];
    const stringElement = strings[i];

    if (i > 0) {
      if (typeof valueElement === "number") {
        str += `$${valueElement.toFixed(2)}`;
      } else {
        str += valueElement
      }
    }
    str += stringElement;
  }
  return str;
};

const amount = 12.3;
const msg = formatCurrency`The Total for your order is ${amount}`;
console.log(msg);
