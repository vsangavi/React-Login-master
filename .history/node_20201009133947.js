// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");

//   })
//   .listen(8080);
const bcrypt = require("bcrypt");
async function some() {
  let password = await bcrypt.hash("san@123", 12);
  console.log(password);
  let result = await bcrypt.compare("@123", password);

}

some();
