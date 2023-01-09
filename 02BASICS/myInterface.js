;
var juliet = {
    dbId: 11,
    email: "juliet@gmail.com",
    userId: 22,
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
juliet.email = 'jul@gmail.com';
console.log(juliet);
