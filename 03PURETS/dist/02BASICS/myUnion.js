"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union types in Typescript
let score = 33;
score = 44;
score = "D";
let Jane = { name: "Janet", id: 5 };
Jane = { username: "Jane", id: 5 };
// Functions can accept and return values of different(union) types also
function obtainDbId(id) {
    console.log(`Database ID is: ${id}`);
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
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
// This will cause a  mismatch cos it means all as numbers or all as strings, the inputs cannot be mixed
const data3 = ["1", "2", "3"];
// This is how to do it, when making an array of more than two types
const data4 = [1, "2", 3, "4"];
// You can make a number strict also
let pi = 3.14;
// Can't do this
// pi = 4.98
// Use case: An airplane seat for instance
let seatAllotment = 'middle';
seatAllotment = 'aisle';
seatAllotment = 'window';
