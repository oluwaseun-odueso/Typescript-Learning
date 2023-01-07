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
type myString = string;

type User = {
    name: myString; 
    email: string;
    isActive: boolean
}

function createUser(user: User): User {
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})

export {};