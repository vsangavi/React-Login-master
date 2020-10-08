const express = require("express");
const router = express.Router();
const validator = require("validator");
const { loginPost } = require("../Controllers/userAuth");

router.post("/login", loginPost);

module.exports = router;
