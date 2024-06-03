class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }

    get area() {
        throw new Error('Area method must be implemented by subclass');
    }

    get countSides() {
        return this.sides.length;
    }
}

class Triangle extends Polygon {
    constructor(side1, side2, side3) {
        const sides = [side1, side2, side3];
        super(sides);
        this.validateTriangle(side1, side2, side3);
    }

    validateTriangle(side1, side2, side3) {
        const sides = [side1, side2, side3].sort((a, b) => b - a);
        if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
            throw new Error('Invalid triangle: all sides must be greater than 0');
        }
        if (sides[0] >= sides[1] + sides[2]) {
            throw new Error('Invalid triangle: sum of any two sides must be greater than the third side');
        }
    }

    get area() {
        const semiPerimeter = this.perimeter / 2;
        const area = Math.sqrt(semiPerimeter * 
            (semiPerimeter - this.sides[0]) * 
            (semiPerimeter - this.sides[1]) * 
            (semiPerimeter - this.sides[2]));
        return area;
    }

    get perimeter() {
        return super.perimeter;
    }
}

class Square extends Polygon {
    constructor(side) {
        super([side, side, side, side]);
        this.validateSquare(side);
    }

    validateSquare(side) {
        if (side <= 0) {
            throw new Error('Invalid square: side must be greater than 0');
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }

    get perimeter() {
        return super.perimeter;
    }
}

