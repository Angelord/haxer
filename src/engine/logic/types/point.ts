
class Point {

    public x: number;
    public y: number;

    public magnitude(): number {
        return (this.x + this.y)
    }

    public add(other: Point): Point { 
        return new Point(this.x + other.x, this.y + other.y);
    }  

    public sub(other: Point): Point {
        return new Point(this.x - other.x, this.y - other.y);
    }

    public equals(other: Point): boolean {
        return (other.x == this.x && other.y == this.y);
    }

    public toString() : string {
        return "(" + this.x + ", " + this.y + ")";
    }

    public static distance(lhs: Point, rhs: Point): number {
        return Math.abs(rhs.x - lhs.x) + Math.abs(rhs.y - lhs.y);
    }
 
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export { Point }