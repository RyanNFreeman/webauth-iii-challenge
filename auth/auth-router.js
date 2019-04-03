const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.status(200).json("hello");
});

module.exports = router;
