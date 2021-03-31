"use strict";

// 이크마 문법으로 function hello와 같다
const hello =  (req,res)=>{
    res.render("home/index");
};

const login =  (req,res)=>{  //컨트롤러 --> MVC로 따로 빼주다?
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};