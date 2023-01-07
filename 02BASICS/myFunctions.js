"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
;
var getUpper = function (val) {
    return val.toUpperCase();
};
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper('Oluwaseun');
signUpUser('Hi', "hit@gmail.com", true);
loginUser('Janet', "jane@ebay.com");
var getHello = function (s) {
    return "You";
};
var heros = ["Thor", "Spiderman", "Ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
