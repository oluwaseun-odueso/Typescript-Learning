const score: Array<number> = [];
const names: Array<number> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
};

function identityTwo(val: any): any {
    return val;
};

// Generics
function identityThree<Type>(val: Type): Type {
    return val;
};

// Generics( A shorter way )
function identityFour<T>(val: T): T {
    return val;
};

// We can use defined types
interface Baller {
    brand: string,
    type: number
}

function identityFive<Baller>(val: Baller): Baller {
    return val;
};

// Generics in array
// This returns one of the values of the array
function getSearchProducts <T> (products: T[]): T {
    // Do some database operations
    const myIndex = 4;
    return products[myIndex];
};

// Generics in array and arrow functions
// A comma can be after the type to show it is not some html or JSX syntax
const getSearchProducts2 = <T,> (products: T[]): T => {
    // Do some database operations
    const myIndex = 2;
    return products[myIndex];
};

// Generics for more than one type
// Generics with extends keyword
interface Database {
    connection: string, 
    username: string, 
    password: string
};

function anotherFunction <T, U extends Database> (valueOne: T, valueTwo: U): object {
    return {
        valueOne,
        valueTwo
    };
};

anotherFunction(3, {
    connection: "strong",
    username: "Timpel",
    password: "Timpel"
});

