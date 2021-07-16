const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("Your name is Mohd");
// });

// event.on("sayMyName", () => {
//   console.log("Your name is Imran");
// });

// event.on("sayMyName", () => {
//   console.log("Your name is Boy");
// });

// event.emit("sayMyName");

event.on("checkPage", (status, message) => {
  console.log(`status code is ${status} and message is${message}`);
});

event.emit("checkPage", 200, " OK");
