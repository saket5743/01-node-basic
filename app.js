// Built - in Modules

// 1. OS
// 2. Path
// 3. FS
// 4. HTTP

const os = require("os")
const user = os.userInfo();
console.log(user);
console.log(`The System Uptime is ${os.uptime()} seconds.`);

console.log(os.type());
console.log(os.freemem());
console.log(os.release());
console.log(os.totalmem());

console.log("Hello nodemon")