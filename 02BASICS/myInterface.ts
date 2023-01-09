interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
};

interface User {
    gitHubToken: string
}

// Interface Inheritance
interface Admin extends User {
    role: "admin" | "employer" | "employee"
}

const juliet: Admin = {
    dbId: 11,
    email: "juliet@gmail.com",
    userId: 22,
    // The fields of the interface does not have to come accordingly
    role: "admin",
    gitHubToken: "token",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "Julianna", off: 12) => {
        return 10
    }
};

juliet.email = 'jul@gmail.com'
