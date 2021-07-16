const fs = require("fs");

// Using Asynchronous Method

// fs.writeFile("read.txt", "Today is awesome day, ", (err) => {
//   console.log("File is Created");
// });

// fs.appendFile("read.txt", "Nice Day", (err) => {
//   console.log("File Changed");
// });

fs.readFile("read.txt", "utf8", (err, data) => {
  console.log(data);
});
