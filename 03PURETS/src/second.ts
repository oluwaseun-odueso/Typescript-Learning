interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number,
};

interface Story {
    createStory(): string
};

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {};
};

class YouTube implements TakePhoto, Story {
    // You can add more than what is defined in the interface but not less
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ) {};
    
    // To implement another interface that has a function, the same function needs to be recreated in the class
    createStory(): string {
        return "Story created"
    };
    // createStory(): void {
    //     console.log("This is a story")
    // };
}