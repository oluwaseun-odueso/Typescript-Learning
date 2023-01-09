;
var juliet = {
    dbId: 11,
    email: "juliet@gmail.com",
    userId: 22,
    // The fields of the interface does not have to come accordingly
    role: "admin",
    gitHubToken: "token",
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
juliet.email = 'jul@gmail.com';
