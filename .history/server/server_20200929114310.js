const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Connection/key");
const app = express();
const port = process.env.port;
//We are requireing the mongodb connection file to our main file
app.listen(port, () => {
  console.info(`Server is runnig in the Port ${port}`);
});
