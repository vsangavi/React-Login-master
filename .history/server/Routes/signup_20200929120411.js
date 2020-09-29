const express = require("express");
const router = express.Router();
const { signupPost, signupGet } = require("../Controllers/userAuth");
/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/signup", signupGet);
router.post("/signup");
module.exports = router;
