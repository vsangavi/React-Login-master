const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { signupPost, signupGet } = require("../Controllers/userAuth");

router.post("/signup", signupPost);
router.post("/signup", signupPost);


module.exports = router;
