const express = require("express");
const router = express.Router();
const {signupPost,signU} = require("../Controllers/userAuth");
/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/signup");
router.post("/signup");
module.exports = router;