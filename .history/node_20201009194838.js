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
  let result = await bcrypt.compare("san@123", password);
  result ? ( token = jwt.sign({ _id: result._id }, "shhhhh"),
        res.cookie("token", token, { expires: new Date(Date.now() + 900000) });
        res.json({ token, email })): console.log("Not login");
} 

some();
