const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { signupPost, signupGet } = require("../Controllers/userAuth");
router.get("/signup", signupGet);
router.post("/signup", signupPost);

module.exports = router;
