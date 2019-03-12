import { GridObject } from "./gridObject";
import { Component } from "./component";
import { Point } from "../types/point";
import { Entity } from "../entity";

class Grid extends Component {

    static readonly NAME: string = "Grid";

    private _width: number;
    private _length: number;
    private _objects: GridObject[][];

    public get width(): number { return this._width; }
    public get length(): number { return this._length; }    
    public get name(): string { return Grid.NAME; } 
    
    public initialize(width: number, length: number) {
        
        this._width = width;
        this._length = length;

        this._objects = [];
        for(let x = 0; x < this._width; x++) {
            this._objects.push([]);
            for(let y = 0; y < this._length; y++) {
                this._objects[x].push(null);
            }
        }
    }

    public contains(pos: Point): boolean  {
        return (
            pos.x >= 0 &&
            pos.y >= 0 &&
            pos.x < this._width &&
            pos.y < this._length
        );
    }

    public getObject(pos: Point): GridObject { 
        return this._objects[pos.x][pos.y]; 
    } 
 
    public removeObject(pos: Point): void {
        let obj = this.getObject(pos);
        if(obj != null) {
            obj.grid = null;
            obj.position = null;
        }

        this._objects[pos.x][pos.y] = null;
    }

    public placeObject(obj: GridObject, pos: Point): void { 

        if(obj == null) {
            throw("Attempting to place a null object." +  
            "If you wish to remove an object use removeObject instead!");
        }

        if(this.getObject(pos) != null) {
            throw("Attempting to place an object on an occupied position at : " + pos);
        }

        this._objects[pos.x][pos.y] = obj;
    }

    public getArea(center: Point, radius: number): Point[] {
        let area: Point[] = [];
        
        for(let x = 0; x < this._width; x++) {
            for(let y = 0; y < this._length; y++) {
                let pos = new Point(x, y);
                if(this.contains(pos) && Point.distance(center, pos) <= radius) {
                    area.push(pos);
                }
            }
        }

        return area;
    }
}

export { Grid }