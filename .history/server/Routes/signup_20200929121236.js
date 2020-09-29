const express = require("express");
const router = express.Router();
const { signupPost, signupGet } = require("../Controllers");
/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/signup", signupGet);
router.post("/signup", signupPost);
module.exports = router;
