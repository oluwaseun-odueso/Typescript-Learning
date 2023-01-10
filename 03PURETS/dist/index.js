"use strict";
class User {
    constructor(email, name) {
        this.city = "Just";
        this.email = email;
        this.name = name;
    }
    ;
}
;
const justice = new User("justice@g.com", "Justice");
justice.city = "Justi";
console.log(justice.city);
