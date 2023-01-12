"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
;
let getUpper = (val) => {
    return val.toUpperCase();
};
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
addTwo(5);
getUpper('Oluwaseun');
signUpUser('Hi', "hit@gmail.com", true);
loginUser('Janet', "jane@ebay.com");
const getHello = (s) => {
    return "You";
};
const heros = ["Thor", "Spiderman", "Ironman"];
// const heros = [1, 2, 3]
heros.map((hero) => {
    return `Hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
