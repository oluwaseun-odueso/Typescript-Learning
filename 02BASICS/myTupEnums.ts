// Tuples are useful for when creating types in special order
// How to define a tuple type
const user: [string, number, boolean] = ["hc", 131, false];

let rgb: [number, number, number] = [101, 105, 111];
;

type User = [number, string];

const newUser: User = [112, "justice@yahoo.com"]

// cons, values can be changed
newUser[1] = "1"

// cons, array methods can be used, this add another value to the length of two initially declared.
newUser.push("true")

console.log(newUser)

export {}