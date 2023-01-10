class User {
    email: string;
    name: string;
    readonly city: string = "Just"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    };
};

const justice = new User("justice@g.com", "Justice");
// justice.city = "Justi"
console.log(justice.city)