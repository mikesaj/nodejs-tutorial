const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.status(200).json("user1");
});

module.exports = router;
