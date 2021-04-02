"use strict";

//nodemon을 사용하면 코드 수정시 서버를 껏다킬 필요가 없음
// front end 기능 구현 !!!!!!!!!!
// DOM 객체 : 문서객체모델, 인터페이스다. 자바스크립트에서 html에 존재하는 데이터를 가져와서 제어한다

const id = document.querySelector("#id"),  //id가 register.ejs에서 똑같다. 선택자로 취급해야함으로 #을 넣어줌
name = document.querySelector("#name"),
psword = document.querySelector("#psword"),
confirmPsword = document.querySelector("#confirm-psword"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
    if (!id.value) return alert("아이디를 입력해주십시오.");

    if (psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }

    const req = {
        id : id.value, //객체일땐 id =이아닌 id:로
        name : name.value,
        psword : psword.value,
       
    };


    fetch("/register", {
        method : "POST", //body를 통해 데이터를 전달할떄 http메서드 중 POST 사용 restAPI 관련
        headers : {
            "Content-type" : "application/json",
        },
        body: JSON.stringify(req), //object를 문자열로 바꿔준다
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else{
                alert(res.msg);  
            }
                 
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });

}

