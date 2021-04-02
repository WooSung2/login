// 자바스크립트 파일 만들떄 --> 이크마 스크립트 문법을 준수하겠다는 얘기
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//서버경로 만들기 (루트에서 각 필요한 기능별로 빠지게 할수있다. ex:로그인)
// - index.ejs와 login.ejs로 이동할떄 필요한 함수 --> render
// router.get 또는 app.get으로 사용 --> express 에서 받아오기 나름
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login); // 명확하게 보여주기 위해
//위의 것들은 home ctrl js에서 정의된 output 페이지 표시?
router.post("/login", ctrl.process.login) //얘는 로긴정보 받아서 처리해주는

router.get("/register", ctrl.output.register);

module.exports = router;