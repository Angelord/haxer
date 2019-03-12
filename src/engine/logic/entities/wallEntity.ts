import { Entity } from "../entity";
import { GridObject } from "../components/gridObject";
import { Destructable } from "../components/destructable";

class WallEntity extends Entity {

    private _gridObjComp: GridObject;

    public get gridObjComp(): GridObject { return this._gridObjComp; } 

    public constructor(health: number) {
        super("Wall");

        this._gridObjComp = this.addComponent(GridObject);

        let destrComp = this.addComponent(Destructable);
        destrComp.maxHealth = health;
        destrComp.curHealth = health;
    }
};

export { WallEntity }