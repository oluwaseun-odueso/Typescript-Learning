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




export {}