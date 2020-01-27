var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "TAB",
    user: null,
    loginError: req.flash("loginError")
  });
});

router.get("/profile", (req, res) => {
  res.render("profile", { title: "내 정보", user: null });
});

router.get("/join", (req, res) => {
  res.render("join", {
    title: "회원 가입",
    user: null,
    joinError: req.flash("joinError")
  });
});

module.exports = router;
