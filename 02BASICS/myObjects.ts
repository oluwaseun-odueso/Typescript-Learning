// const user = {
//     name: "Janet", 
//     email: "janet@gmail.com",
//     isActive: true
// };

// function createUser({name: string, isPaid: boolean}) {};

// // Weird behaviour
// let newUser = {name: "Jane", isPaid: true, email: "J@J.com"};
// createUser(newUser);

// function createCourse(): {name: string, price: number} {
//     return {name: "Adebola", price: 5000};
// };
// type myString = string;

// type User = {
//     name: myString; 
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})

// Use read only keyword for values that you do not want to be altered
// Add question mark behind values you want to declare optional
type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: number;
}

let myUser: User = {
    _id: "1234",
    name: "boy",
    email: "boy@mail.com",
    isActive: true
}
 
// Mix and match of types: Combining types
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// Mix and match of types

myUser.email = "boyles@gmail.com";
// Cannot reassign read only values
// myUser._id = "234"

console.log(myUser)


export {};