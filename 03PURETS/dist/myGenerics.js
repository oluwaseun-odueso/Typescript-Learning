"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
;
function identityTwo(val) {
    return val;
}
;
// Generics
function identityThree(val) {
    return val;
}
;
// Generics( A shorter way )
function identityFour(val) {
    return val;
}
;
function identityFive(val) {
    return val;
}
;
// Generics in array
// This returns one of the values of the array
function getSearchProducts(products) {
    // Do some database operations
    const myIndex = 4;
    return products[myIndex];
}
;
// Generics in array and arrow functions
// A comma can be after the type to show it is not some html or JSX syntax
const getSearchProducts2 = (products) => {
    // Do some database operations
    const myIndex = 2;
    return products[myIndex];
};
