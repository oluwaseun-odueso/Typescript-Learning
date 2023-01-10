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
        // A protected field can be accessed in an inherited class but not directly in an instance or outside the class
        this._courseCount = 1;
        this.city = "Lagos";
    }
    ;
    // There could be private methods as well
    deleteToken() {
        console.log("Token deleted.");
    }
    // ACCESS MODIFIERS
    // Getters in Typescript
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    ;
    get courseCount() {
        return this._courseCount;
    }
    ;
    // NB: A setter should have no return type
    // NB: Also, setters cannot return a value
    // NB: A setter does not have a return type because it usually have no return value
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        ;
        this._courseCount = courseNum;
    }
    ;
}
// Inherited class(User)
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
    ;
}
;
// Private fields cannot be accessed in inherited classes
const justice = new User("justice@g.com", "Justice", 1);
// justice.city = "Justi"
