const upper = (strings, ...values) => {
	let str = "";
	for (let i=0; i<strings.length; i++) {
		const valueElement = values[i - 1];
		const stringElement = strings[i];
		
		if (i > 0) {
			str += String(valueElement).toUpperCase();
		}
		str += stringElement;
	}
	return str;
};

const name = "Harry Manchanda";
const	twitter = "harmanmanchanda";
const	topic = "JS Recent Parts";

console.log(upper`Hello ${name} (@${twitter}), welcome to ${topic}!`);