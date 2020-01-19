const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Good, Auction, User } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

router.get("/", async (req, res, next) => {
  try {
    const goods = await Good.findAll({ where: { soldId: null } });
    res.render("main", {
      title: "NodeAuction",
      goods,
      loginError: req.flash("loginError")
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", {
    title: "회원가입 - NodeAuction",
    joinError: req.flash("joinError")
  });
});

router.get("/good", isLoggedIn, (req, res) => {
  res.render("good", { title: "상품 등록 - NodeAuction" });
});

fs.readdir("uploads", error => {
  if (error) {
    console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
    fs.mkdirSync("uploads");
  }
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.post(
  "/good",
  isLoggedIn,
  upload.single("img"),
  async (req, res, next) => {
    try {
      const { name, price } = req.body;
      await Good.create({
        ownerId: req.user.id,
        name,
        img: req.file.filename,
        price
      });
      res.redirect("/");
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

router.get("/good/:id", isLoggedIn, async (req, res, next) => {
  try {
    const [good, auction] = await Promise.all([
      Good.findOne({
        where: { id: req.params.id },
        include: {
          model: User,
          as: "owner"
        }
      }),
      Auction.findAll({
        where: { goodId: req.params.id },
        include: { model: User },
        order: [["bid", "ASC"]]
      })
    ]);
    res.render("auction", {
      title: `${good.name} - NodeAuction`,
      good,
      auction,
      auctionError: req.flash("auctionError")
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/good/:id/bid", isLoggedIn, async (req, res, next) => {
  try {
    const { bid, msg } = req.body;
    const good = await Good.findOne({
      where: { id: req.params.id },
      include: { model: Auction },
      order: [[{ model: Auction }, "bid", "DESC"]]
    });
    // 시장 가격보다 낮게 입찰하면
    if (good.price > bid) {
      return res.status(403).send("시장 가격보다 높게 입찰해야 합니다.");
    }
    // 직전 입찰가와 현재 입찰가 비교
    if (good.auction[0] && good.auction[0].bid >= bid) {
      return res.status(403).send("이전 입찰가보다 높아야 합니다.");
    }

    const result = await Auction.create({
      bid,
      msg,
      userId: req.user.id,
      goodId: req.params.id
    });

    req.app
      .get("io")
      .to(req.params.id)
      .emit("bid", {
        bid: result.bid,
        msg: result.msg,
        nick: req.user.nick
      });
    return res.send("ok");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;
