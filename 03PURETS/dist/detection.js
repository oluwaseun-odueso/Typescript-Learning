"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    ;
    return val + 3;
}
;
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    ;
    id.toLowerCase();
}
;
function printAll(strs) {
    // DO NOT DO THIS!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
            ;
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        ;
    }
    ;
}
;
function isAdminForAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    ;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
    ;
}
;
function isFish(pet) {
    return pet.swim != undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
