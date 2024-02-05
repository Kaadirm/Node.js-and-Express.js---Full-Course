// const fs = require("fs");
console.log("start");
const { readFileSync, writeFileSync, write } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync("./content/result-sync.txt", `Here is the result ----- ${first} ----- ${second}`, {flag: "a"})

console.log(readFileSync("./content/result-sync.txt", "utf8"));


console.log("done with this task");
console.log("starting the next one");