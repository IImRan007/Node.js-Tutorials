const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       res.end(data.toString());
  //     }
  //   });

  //   2nd Way for reading real time data
  const rstream = fs.createReadStream("input.txt");

  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", () => {
    console.log("Error");
    res.end("File Not Found");
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});
