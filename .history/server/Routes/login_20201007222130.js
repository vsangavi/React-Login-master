const express = require("express");
const router = express.Router();
const { loginPost, loginGet } = require("../Controllers/userAuth");

router.post("/login", loginPost);

module.exports = router;
