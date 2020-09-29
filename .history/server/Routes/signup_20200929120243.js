const express = require("express");
const router = express.Router();
/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/signup", (req, res) => {
  
});
router.post("/signup", (req, res) => {
  res.json({ message: "Working of post route in signup" });
});
module.exports = router;
