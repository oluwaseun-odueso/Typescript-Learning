"use strict";
class Polygon {
    constructor(n = 3, side = 1, x = 0, y = 0) {
        this.n = n;
        this.side = side;
        this.x = x;
        this.y = y;
    }
    ;
    set shapeN(n) {
        this.n = n;
    }
    ;
    get shapeN() {
        return this.n;
    }
    ;
    set shapeSide(side) {
        this.side = side;
    }
    ;
    get shapeSide() {
        return this.side;
    }
    ;
    set shapeX(x) {
        this.x = x;
    }
    ;
    get shapeX() {
        return this.x;
    }
    ;
    set shapeY(y) {
        this.y = y;
    }
    ;
    get shapeY() {
        return this.y;
    }
    ;
    getPerimeter() {
        const perimeter = this.n ** 2;
        return perimeter;
    }
    ;
    getArea() {
        const area = (this.n * (this.side ** 2)) / 4 * (Math.tan(Math.PI / this.n));
        return area;
    }
    ;
}
;
function main() {
    const polygon1 = new Polygon();
    const polygon2 = new Polygon(6, 4);
    const polygon3 = new Polygon(10, 4, 5.6, 7.8);
    console.log("The perimeter and area of Polygon1 are", polygon1.getPerimeter(), "and", polygon1.getArea(), "respectively.");
    console.log("The perimeter and area of Polygon2 are", polygon2.getPerimeter(), "and", polygon2.getArea(), "respectively.");
    console.log("The perimeter and area of Polygon3 are", polygon3.getPerimeter(), "and", polygon3.getArea(), "respectively.");
}
main();
