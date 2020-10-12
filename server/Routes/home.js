const express = require("express");
const router = express.Router();

const { isLoggedin } = require("../Controllers/userAuth");

router.get("/home", isLoggedin, (req, res) => {
  res.json(req.authentication);
});

module.exports = router;
