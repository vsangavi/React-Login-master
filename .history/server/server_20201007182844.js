//required express and bodyparser to our main file
const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
require("dotenv").config();
//We are requireing the mongodb connection file to our main file
require("./Connection/key");
const signupRoute = require("./Routes/signup");
const loginRoute = require("./Routes/login");
const app = express();
const port = process.env.port;
app.use(bodyParser.json());
app.use("/", signupRoute);
app.use("/", loginRoute);
app.listen(port, () => {
  console.info(`Server is runnig in the Port ${port}`);
});
