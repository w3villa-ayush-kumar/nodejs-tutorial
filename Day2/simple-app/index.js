const _ = require("lodash");
const math = require("./math");

const numbers = [2, 5, 7, 8, 10];
console.log("Sum:", _.sum(numbers));
console.log("Add:", math.add(_.random(0, 5), _.random(0, 5)));
console.log("Multiply:", math.multiply(_.random(0, 5), _.random(0, 5)));
