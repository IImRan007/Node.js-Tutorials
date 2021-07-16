const path = require("path");

// console.log(
//   path.dirname("G:/Node.js Tutorials/tutorial 11-PATH Module/index.js")
// );

// console.log(
//   path.extname("G:/Node.js Tutorials/tutorial 11-PATH Module/index.js")
// );

// console.log(
//   path.basename("G:/Node.js Tutorials/tutorial 11-PATH Module/index.js")
// );

// console.log(
//   path.parse("G:/Node.js Tutorials/tutorial 11-PATH Module/index.js")
// );

const myPath = path.parse(
  "G:/Node.js Tutorials/tutorial 11-PATH Module/index.js"
);
console.log(myPath.name);
