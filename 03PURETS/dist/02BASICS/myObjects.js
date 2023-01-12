"use strict";
// const user = {
//     name: "Janet", 
//     email: "janet@gmail.com",
//     isActive: true
// };
Object.defineProperty(exports, "__esModule", { value: true });
let myUser = {
    _id: "1234",
    name: "boy",
    email: "boy@mail.com",
    isActive: true
};
// Mix and match of types
myUser.email = "boyles@gmail.com";
// Cannot reassign read only values
// myUser._id = "234"
console.log(myUser);
