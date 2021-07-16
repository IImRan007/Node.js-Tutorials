const fs = require("fs");

// Create a file and insert data
// fs.writeFileSync("read.txt", "Welcome to Node.js Tutorial");

// Adding more data to the file
// fs.appendFileSync("read.txt", " You will learn new things.");

// Reading file data
// const data = fs.readFileSync("read.txt");
// console.log(data);
// It will give buffer data which is in binary format.

// Converting buffer data into string format.
// original_data = data.toString();
// console.log(original_data);

// to rename the file:
fs.renameSync("read.txt", "rename.txt");
