const express = require("express");
const router = express.Router();
const { loginPost, loginGet } = require("../Controllers/userAuth");


router.get("/login", loginGet);
router.post("/login", loginPost);
module.exports = router;
