"use strict";
// class User {
//     // Every field you don't state as private is public
//     email: string;
//     name: string;
//     // You can make a field inaccessible by using the private keyword, it can only be accessed within the class
//     private readonly city: string = "Lagos"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     };
// };
// A class can also be written concisely as this
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Lagos";
    }
}
const justice = new User("justice@g.com", "Justice", 1);
// justice.city = "Justi"
