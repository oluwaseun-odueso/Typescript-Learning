"use strict";
;
class Fan {
    constructor(speed = 1, on = false, radius = 5, color = "blue") {
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    ;
    // Speed Mutator
    set fanSpeeed(speed) {
        this.speed = speed;
    }
    ;
    // Speed Accessor
    get fanSpeed() {
        if (this.speed === 1) {
            return "SLOW";
        }
        else if (this.speed === 2) {
            return "MEDIUM";
        }
        else {
            return "FAST";
        }
        ;
    }
    ;
    // On Mutator
    set isOn(on) {
        this.on = on;
    }
    ;
    // On Accessor
    get isOn() {
        return this.on;
    }
    ;
    // Radius mutator
    set fanRadius(radius) {
        this.radius = radius;
    }
    ;
    // Radius Accessor
    get fanRadius() {
        return this.radius;
    }
    ;
    // Color Mutator
    set fanColor(color) {
        this.color = color;
    }
    // Color Accessor
    get fanColor() {
        return this.color;
    }
    ;
}
;
