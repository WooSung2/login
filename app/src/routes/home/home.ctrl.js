// ******** C (Controller) : UserStorage안에 있는 User 데이터를 가져와서 User를 검증해준다
//         --> 이걸 분리해서 이점이 많은 코드로 바꿔줌


"use strict";

const User = require("../../models/User");


const output = {
    home : (req,res) => {
        res.render("home/index");
    },

    login :  (req,res)=>{  //컨트롤러 --> MVC로 따로 빼주다?
        res.render("home/login");
    },
};


const process = {
    login: (req, res) => {
        const user = new User(req.body); //user라는 클래스를 인스턴스화 req.body : 클라이언트가 요청한.
                // 얘는 User.js에서 body를 들고다닌다.
        const response = user.login(); //User.js의 login 메서드를 가져옴
        

        return res.json(response);
    },


}




module.exports = {
    output,
    process
};