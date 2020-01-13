const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/test", async (req, res, next) => {
  try {
    // 세션에 토큰이 없으면
    if (!req.session.jwt) {
      const tokenResult = await axios.post("http://localhost:8002/v1/token", {
        clientSecret: process.env.CLIENT_SECRET
      });
      // 토큰 발급 성공
      if (tokenResult.data && tokenResult.data.code === 200) {
        req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장
      } else {
        return res.json(tokenResult.data); // 발급 실패 사유 응답
      }
    }
    // 발급받은 토큰 테스트
    const result = await axios.get("http://localhost:8002/v1/test", {
      headers: { authorization: req.session.jwt }
    });
    return res.json(result.data);
  } catch (error) {
    console.error(error);
    // 토큰 만료시
    if (error.response.status === 419) {
      return res.json(error.response.data);
    }
    return next(error);
  }
});

module.exports = router;
