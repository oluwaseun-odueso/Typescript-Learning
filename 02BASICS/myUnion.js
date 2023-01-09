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
