const fs = require("fs");

// fs.mkdirSync("./thapa");

// fs.writeFileSync("thapa/bio.txt", "My name is Thapa, ");
// fs.appendFileSync("thapa/bio.txt", "Hello Thapa");

// const data = fs.readFileSync("thapa/bio.txt");
// console.log(data.toString());

// OR add utf8 after file path
// const data = fs.readFileSync("thapa/bio.txt", "utf8");
// console.log(data);

// Renaming file
// fs.renameSync("thapa/bio.txt", "thapa/myBio.txt");

// Deleting File
// fs.unlinkSync("thapa/myBio.txt");

// Deleting Folder
fs.rmdirSync("thapa");
