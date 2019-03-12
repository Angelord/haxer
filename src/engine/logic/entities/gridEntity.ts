import { Entity } from "../entity";
import { Grid } from "../components/grid";

class GridEntity extends Entity {

    private _gridComp: Grid;

    public get gridComp(): Grid { return this._gridComp; }

    public constructor(width: number, length: number) {
        super("Grid");
        
        this._gridComp = this.addComponent(Grid);
        this._gridComp.initialize(width, length);
    }
}

export { GridEntity } 