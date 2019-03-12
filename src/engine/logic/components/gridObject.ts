
import { Component } from "./component"
import { Grid } from "./grid";
import { Point } from "../types/point";

class GridObject extends Component {
    
    static readonly NAME: string = "GridObject";

    public grid: Grid;
    public position: Point;
    public traversable: boolean;

    public get placed(): boolean { return (this.grid != null && this.position != null); }
    public get name(): string { return GridObject.NAME; } 

}

export { GridObject };