// GLOBAL - NO WINDOW !!!

// __dirname - path to the current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed

console.log(__dirname);
console.log(__filename);
setInterval(()=>{
  console.log("Hello Node js")
},2000)