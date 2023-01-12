const enum FanSpeed {
    SLOW = 1,
    MEDIUM,
    FAST
};

class Fan {
    constructor(
        private speed: number = 1,
        private on: boolean = false,
        private radius: number = 5,
        private color: string = "blue"
    ) {};

    // Speed Mutator
    set fanSpeeed (speed : number) {
        this.speed = speed;
    };

    // Speed Accessor
    get fanSpeed (): string {
        if (this.speed === 1) {
            return "SLOW";
        } else if (this.speed === 2) {
            return "MEDIUM";
        } else {
            return "FAST";
        };
    };

    // On Mutator
    set isOn (on: boolean) {
        this.on = on;
    };

    // On Accessor
    get isOn () {
        return this.on
    };

    // Radius mutator
    set fanRadius (radius: number) {
        this.radius = radius;
    };

    // Radius Accessor
    get fanRadius () {
        return this.radius;
    };

    // Color Mutator
    set fanColor (color: string) {
        this.color = color;
    }

    // Color Accessor
    get fanColor () {
        return this.color;
    };
};