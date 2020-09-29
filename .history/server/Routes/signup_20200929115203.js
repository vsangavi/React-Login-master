const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const mongoose = require("mongoose");
routes.get("/", (req, res) => {
  res.json({ message: "Working of get route" });
});
