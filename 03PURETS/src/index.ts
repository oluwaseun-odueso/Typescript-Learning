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

    private _courseCount = 1;
    readonly city: string = "Lagos";

    constructor(
        public email: string, 
        public name: string, 
        private userId: number) {};

    // There could be private methods as well
    private deleteToken() {
        console.log("Token deleted.")
    }

    // Getters in Typescript
    get getAppleEmail(): string {
        return `apple ${this.email}`;
    };

    get courseCount(): number {
        return this._courseCount;
    };

    // NB: A setter should have no return type
    // NB: Also, setters cannot return a value
    // NB: A setter does not have a return type because it usually have no return value
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        };
        this._courseCount = courseNum;
    };
}


const justice = new User("justice@g.com", "Justice", 1);
// justice.city = "Justi"
