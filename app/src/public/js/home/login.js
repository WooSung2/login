"use strict";

//nodemon을 사용하면 코드 수정시 서버를 껏다킬 필요가 없음
// front end 기능 구현 !!!!!!!!!!
// DOM 객체 : 문서객체모델, 인터페이스다. 자바스크립트에서 html에 존재하는 데이터를 가져와서 제어한다

const id = document.querySelector("#id"),  //id가 login.ejs에서 똑같다. 선택자로 취급해야함으로 #을 넣어줌
psword = document.querySelector("#psword"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };
    console.log(req);
}

// console.log(id);