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