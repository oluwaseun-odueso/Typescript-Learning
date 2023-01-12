"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const juliet = {
    dbId: 11,
    email: "juliet@gmail.com",
    userId2: 22,
    // The fields of the interface does not have to come accordingly
    role: "admin",
    gitHubToken: "token",
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name, off) => {
        return 10;
    }
};
juliet.email = 'jul@gmail.com';
