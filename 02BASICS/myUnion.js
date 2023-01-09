"use strict";
exports.__esModule = true;
// Union types in Typescript
var score = 33;
score = 44;
score = "D";
var Jane = { name: "Janet", id: 5 };
Jane = { username: "Jane", id: 5 };
// Functions can accept and return values of different(union) types also
function obtainDbId(id) {
    console.log("Database ID is: ".concat(id));
}
;
// Methods used on input must be applicable to both types declared
function getDbId(id) {
    // Can use an if statement to manipulate the method(s)
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    else
        return id.toPrecision();
}
;
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
// This will cause a  mismatch cos it means all as numbers or all as strings, the inputs cannot be mixed
var data3 = ["1", "2", "3"];
// This is how to do it, when making an array of more than two types
var data4 = [1, "2", 3, "4"];
// You can make a number strict also
var pi = 3.14;
// Can't do this
// pi = 4.98
// Use case: An airplane seat for instance
var seatAllotment = 'middle';
seatAllotment = 'aisle';
seatAllotment = 'window';
