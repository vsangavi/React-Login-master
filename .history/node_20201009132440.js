// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
  
//   })
//   .listen(8080);
const bcrypt = require("bcrypt");
  password = await bcrypt.hash(this.password, 12);

