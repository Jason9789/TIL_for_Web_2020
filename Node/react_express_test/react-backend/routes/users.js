var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" },
    { id: 3, username: "Jason" },
    { id: 4, username: "test" }
  ]);
});

module.exports = router;
