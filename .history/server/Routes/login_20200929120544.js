const express = require("express");
const router = express.Router();
const { signupPost, signupGet } = require("../Controllers/userAuth");

/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/login", (req, res) => {
  res.json({ message: "Working of get route in login" });
});
router.post("/login", (req, res) => {
  res.json({ message: "Working of post route in login" });
});
module.exports = router;
