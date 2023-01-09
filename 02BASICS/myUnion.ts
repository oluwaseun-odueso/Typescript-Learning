// Union types in Typescript
let score: number | string = 33;
score = 44;
score = "D";

// Union types on declared types
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let Jane: User | Admin = {name: "Janet", id: 5};

Jane = {username: "Jane", id: 5}

// Functions can accept and return values of different(union) types also
function obtainDbId(id: number | string) {
    console.log(`Database ID is: ${id}`);
};

// Methods used on input must be applicable to both types declared
function getDbId(id: number | string): number | string {
    // Can use an if statement to manipulate the method(s)
    if (typeof id === "string") {
        return id.toLowerCase();
    } else return id.toPrecision();
};



// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// This will cause a  mismatch cos it means all as numbers or all as strings, the inputs cannot be mixed
const data3: string[] | number[] = ["1", "2", "3"];

// This is how to do it, when making an array of more than two types
const data4: (string | number)[] = [1, "2", 3, "4"];

// You can make a number strict also
let pi: 3.14 = 3.14;

// Can't do this
// pi = 4.98

// Use case: An airplane seat for instance
let seatAllotment: "aisle" | "middle" | "window" = 'middle';
seatAllotment = 'aisle';
seatAllotment = 'window'

// Can't set seat allotment to something else apart from the declared values
// seatAllotment = 'carbin'


export {}