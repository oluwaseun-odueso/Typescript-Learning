"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuples are useful for when creating types in special order
// How to define a tuple type
const user = ["hc", 131, false];
let rgb = [101, 105, 111];
;
const newUser = [112, "justice@yahoo.com"];
// cons, values can be changed
newUser[1] = "1";
// cons, array methods can be used, this add another value to the length of two initially declared.
newUser.push("true");
console.log(newUser);
