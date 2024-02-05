// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require("./4-name");
const {john, peter} = require("./4-name");

const sayHi = require("./5-utils");

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

sayHi(john)
sayHi(peter)
