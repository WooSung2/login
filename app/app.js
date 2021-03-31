//node는 v8엔진으로(자바스크립트 컴파일러) 코드를 해석해달라는것
//http는 루트찾는걸 못해서 if문 그리고 한글처리도 따로 해줘야함

// 모듈
const express = require("express");
const bodyParser = require("body-parser"); // body를 불러올떄 필요한
const app = express();

//라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); //ejs는 html이라고 생각해도 무관

app.use(express.static(`${__dirname}/src/public`)); //dirname은 현재위치 반환 , 저 위치를 정적경로로 추가
app.use(bodyParser.json()); //bodyparser 미들웨어 설치?
// URL을 통해 전달되는 데이터에 한글, 공백 문자가 포함딜 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));
//router 받아오기
//use는 미들웨어를 등록해주는 메서드 --
app.use("/", home)  // routes/home로 가서 index.js내에 있는 render함수 실행


module.exports = app;


