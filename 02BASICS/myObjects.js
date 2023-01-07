"use strict";
exports.__esModule = true;
var user = {
    name: "Janet",
    email: "janet@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
;
// Weird behaviour
var newUser = { name: "Jane", isPaid: true, email: "J@J.com" };
createUser(newUser);
function createCourse() {
    return { name: "Adebola", price: 5000 };
}
;
