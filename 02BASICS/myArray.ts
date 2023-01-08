const superHeros: string[] = [];
// const heroPower: number[] = []
const heroPower: Array<number> = [];

type User = {
    name: string;
    isActive: boolean;
};

const allUsers: User[] = []

const MLModels: number[][] = [
    [10, 21, 15], 
    [14, 45, 54]
]

superHeros.push("spiderman");
heroPower.push(2);

allUsers.push({
    name: "June",
    isActive: true
});

console.log(allUsers);
console.log(superHeros);
console.log(heroPower);

export {}