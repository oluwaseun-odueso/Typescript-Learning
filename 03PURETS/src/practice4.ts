class Polygon {
    constructor (
        private n : number = 3,
        private side: number = 1,
        private x: number = 0,
        private y: number = 0
    ) {};

    set shapeN (n) {
        this.n = n;
    };

    get shapeN (): number {
        return this.n;
    };

    set shapeSide (side: number) {
        this.side = side;
    };

    get shapeSide (): number {
        return this.side;
    };

    set shapeX (x: number) {
        this.x = x;
    };

    get shapeX (): number {
        return this.x;
    };

    set shapeY (y: number) {
        this.y = y;
    };

    get shapeY () {
        return this.y;
    };

    getPerimeter () {
        const perimeter = this.n ** 2;
        return perimeter
    };

    getArea () {
        const area = (this.n * (this.side ** 2)) / 4 * (Math.tan (Math.PI / this.n));
        return area;
    };
};