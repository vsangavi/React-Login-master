const express = require("express");
const router = express.Router();

//const { isSignedIn } = require("../Controllers/userAuth");

router.get("/home", (req, res) => {
  res.json({ message: "Proected route is working" });
});

module.exports = router;
