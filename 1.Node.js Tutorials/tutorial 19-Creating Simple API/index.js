const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  // Synchronously
  const data = fs.readFileSync(`${__dirname}/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("Hello from Home Page");
  } else if (req.url == "/contact") {
    res.end("Hello from Contact Page");
  } else if (req.url == "/about") {
    res.end("Hello from About Page");
  } else if (req.url == "/userapi") {
    //   Asynchronously
    // fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
    //   console.log(data);
    //   //   res.end(data);
    //   const objData = JSON.parse(data);
    //   res.end(objData[0].name);
    // });
    // res.end("Hello from User API Page");
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(objData[2].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Error 404!! Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});
