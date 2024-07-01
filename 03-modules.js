// Common JS, every file is module (by default)
// Modules - Encapsulated code - share minimum

const names = require("./04-names");
const sayHiFunc = require("./05-utils");

sayHiFunc("Mohit");
sayHiFunc(names.rahul);
sayHiFunc(names.raj);