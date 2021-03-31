//node는 v8엔진으로(자바스크립트 컴파일러) 코드를 해석해달라는것
//http는 루트찾는걸 못해서 if문 그리고 한글처리도 따로 해줘야함

// 모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //ejs는 html이라고 생각해도 무관

//router 받아오기
//use는 미들웨어를 등록해주는 메서드 --
app.use("/", home)  // routes/home로 가서 index.js내에 있는 render함수 실행


module.exports = app;


