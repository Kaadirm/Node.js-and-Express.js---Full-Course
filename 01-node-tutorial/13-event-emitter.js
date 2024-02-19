const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`User's name is ${name} and age is ${age} ` )
  console.log(`data received`);
})

customEmitter.on("response", () => {
  console.log(`some other logic here`);
})
customEmitter.emit("response", "john", 34);

