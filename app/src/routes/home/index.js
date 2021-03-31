// 자바스크립트 파일 만들떄 --> 이크마 스크립트 문법을 준수하겠다는 얘기
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//서버경로 만들기 (루트에서 각 필요한 기능별로 빠지게 할수있다. ex:로그인)
// - index.ejs와 login.ejs로 이동할떄 필요한 함수 --> render
// router.get 또는 app.get으로 사용 --> express 에서 받아오기 나름
router.get("/", ctrl.hello);
router.get("/login", ctrl.login); // 명확하게 보여주기 위해


module.exports = router;