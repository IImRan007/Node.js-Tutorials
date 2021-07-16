const fs = require("fs");

const bioData = {
  name: "Imran",
  age: 22,
  channel: "Lazy Coder",
};

// console.log(bioData.channel);

// Converting object into JSON

const jsonData = JSON.stringify(bioData);

// console.log(jsonData);
// Output -  {"name":"Imran","age":22,"channel":"Lazy Coder"}

// Converting JSON into object

// const objData = JSON.parse(jsonData);

// console.log(objData);
// Output - { name: 'Imran', age: 22, channel: 'Lazy Coder' }

// fs.writeFile("jsonFile.json", jsonData, (err) => {
//   console.log("Done");
// });

fs.readFile("jsonFile.json", "utf-8", (err, data) => {
  // console.log(data);
  const originalData = JSON.parse(data);
  console.log(originalData);
});
