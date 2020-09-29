const express = require("express");
const router = express.Router();
/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/signup", (req, res) => {
  res.json({ message: "Working of get route in signup" });
});
router.post("/register", (req, res) => {
  res.json({ message: "Working of get route in signup" });
});
module.exports = router;
