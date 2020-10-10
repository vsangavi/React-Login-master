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
  let result = bcrypt
    .compare(, result.password)
    .then(function (err, op) {
      if (err) {
        res.json({ message: err });
      } else {
        res.json({ message: "Pasword match" });
      }
    });
}
some();
