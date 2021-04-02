// ****** bin안에 --> app.js 실행 파일


"use strict";

const app = require("../app")
const PORT = 3000;

app.listen(PORT, ()=> {
    console.log("서버 가동")
});