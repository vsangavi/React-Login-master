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
  bcrypt.compare("san@123", password).then(function (err, op) {
    if (err) {
      console.log("error");
    } else {
      console.log("Passmatch");
    }
  });
}
some();
