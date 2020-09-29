const express = require("express");
const router = express.Router();
const { loginPost, loginGet } = require("../Controllers/userAuth");

/*const User = require("../Models/user");
const mongoose = require("mongoose");*/
router.get("/login", loginGet);
router.post("/login", loginPost);
});
module.exports = router;
