"use strict";
exports.__esModule = true;
// Tuples are useful for when creating types in special order
// How to define a tuple type
var user = ["hc", 131, false];
var rgb = [101, 105, 111];
;
var newUser = [112, "justice@yahoo.com"];
// cons, values can be changed
newUser[1] = "1";
// cons, array methods can be used, this add another value to the length of two initially declared.
newUser.push("true");
console.log(newUser);
