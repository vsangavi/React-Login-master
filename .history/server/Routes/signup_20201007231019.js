const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { signupPost } = require("../Controllers/userAuth");

router.post("/signup", signupPost);
router.post("/login", loginPost);

module.exports = router;
