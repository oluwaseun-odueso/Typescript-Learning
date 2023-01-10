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
    readonly city: string = "Lagos";
    constructor(
        public email: string, 
        public name: string, 
        private userId: number) {}
}


const justice = new User("justice@g.com", "Justice", 1);
// justice.city = "Justi"
