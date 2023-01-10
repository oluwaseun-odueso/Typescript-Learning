"use strict";
;
;
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    ;
}
;
class YouTube {
    // You can add more than what is defined in the interface but not less
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    ;
    // To implement another interface that has a function, the same function needs to be recreated in the class
    createStory() {
        return "Story created";
    }
    ;
}
