const express = require("express");
const router = express.Router();
/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/login", (req, res) => {
  res.json({ message: "Working of get route" });
});
router.post("/login", (req, res) => {
  res.json({ message: "Working of get route" });
});
module.exports = router;
