"use strict";

// # : public에서 외부에서 불러올수없는걸로 바꿈(private)
// 데이터를 은닉화시켜주고 method로 전달을 해줘야함(getUsers)

class UserStorage{
    static #users = {
        id : ["이우성","이동학","JSH","LJY91"],
        psword : ["123","1234","12345","123456"],
        name : ["lee","lee","jung","lim"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
           
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //users의 key를 list로 마듬 => {id, psword, name}
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx]; //index를 사용하여 psword, name정보 가져옴
            return newUser;
        }, {})
        
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.id);
        return {success : true};
    
    }
}



module.exports = UserStorage;