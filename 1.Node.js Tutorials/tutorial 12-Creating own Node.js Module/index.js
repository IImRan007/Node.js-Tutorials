// const operator = require("./operator");
// const add = require("./operator");
// const name = require("./operator");
// const sub = require("./operator");

// console.log(operator.add(5, 5));
// console.log(operator.sub(10, 5));
// console.log(operator.name);

const { add, sub, name, mul } = require("./operator");

console.log(add(5, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(name);
