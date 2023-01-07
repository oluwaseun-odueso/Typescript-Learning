function addTwo(num: number): number {
    return num + 2;
};

let getUpper = (val: string) => {
    return val.toUpperCase();
};

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper('Oluwaseun');

signUpUser('Hi', "hit@gmail.com", true);
loginUser('Janet', "jane@ebay.com")


const getHello = (s: string) => {
    return "You"
}

const heros = ["Thor", "Spiderman", "Ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `Hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

export {}