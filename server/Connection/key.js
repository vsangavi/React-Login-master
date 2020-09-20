const mongoose = require("mongoose");
require("dotenv").config();
//Connecting to mongodb Atlas
mongoose.connect(process.env.Database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//If connection is done successfully 
mongoose.connection.on("connected", () => {
  console.info("MongoDB connected Successfully!!");
});
//If it throws some error
mongoose.connection.on("error", (err) => {
  console.error(`Error in mongoose connection: ${err.message}`);
});
