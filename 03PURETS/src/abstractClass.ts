abstract class TakePhoto {
    constructor(
        public camerMode: string,
        public filter: string
    ) {};
    
    // To make a method compulsory for an inheriting class, make it an abstract method
    abstract getSepia(): void 
    
    // Doing something like this differentiates an abstact class from an interface
    getReels(): number {
        // Do some logic
        return 8
    }
};

class Instagram extends TakePhoto {
    // Most common
    // Constructors for derived classes must contain a super call
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    };

    getSepia(): void {
        console.log("This is Sepia")
    }
    
    // If methods in super class are not abstract methods, they can be overwritten
    getReels(): number {
        return 10
    }
};

const jet = new Instagram("test", "test", 4);
const a = jet.getReels()
console.log(a)

// Cannot create an instance of an asbtract class
// const jet = new TakePhoto("test", "test");