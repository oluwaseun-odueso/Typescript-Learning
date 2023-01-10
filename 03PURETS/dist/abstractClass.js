"use strict";
class TakePhoto {
    constructor(camerMode, filter) {
        this.camerMode = camerMode;
        this.filter = filter;
    }
    ;
    // Doing something like this differentiates an abstact class from an interface
    getReels() {
        // Do some logic
        return 8;
    }
}
;
class Instagram extends TakePhoto {
    // Most common
    // Constructors for derived classes must contain a super call
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    ;
    getSepia() {
        console.log("This is Sepia");
    }
    getReels() {
        return 10;
    }
}
;
const jet = new Instagram("test", "test", 4);
const a = jet.getReels();
console.log(a);
// Cannot create an instance of an asbtract class
// const jet = new TakePhoto("test", "test");
