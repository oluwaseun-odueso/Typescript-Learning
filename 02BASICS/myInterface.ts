interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
};

const juliet: User = {
    dbId: 11,
    email: "juliet@gmail.com",
    userId: 22,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "Julianna", off: 12) => {
        return 10
    }
};

juliet.email = 'jul@gmail.com'
console.log(juliet)
