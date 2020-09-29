const express = require("express");
const router = express.Router();
const { loginPost, loginGet } = require("../Controllers/userAuth");

/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/login", );
router.post("/login", (req, res) => {
  res.json({ message: "Working of post route in login" });
});
module.exports = router;
