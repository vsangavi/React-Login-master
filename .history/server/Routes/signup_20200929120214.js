const express = require("express");
const router = express.Router();
/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/register", (req, res) => {
  res.json({ message: "Working of get route in signup" });
});
router.post("/register", (req, res) => {
  res.json({ message: "Working of post route in signup" });
});
module.exports = router;
