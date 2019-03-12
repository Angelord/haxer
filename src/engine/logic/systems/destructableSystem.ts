import { System } from "./system";
import { World } from "../world";
import { Destructable } from "../components/destructable";
import { GridObject } from "../components/gridObject";
import { Grid } from "../components/grid";

class DestructableSystem extends System {

    constructor(world: World) {
        super(world);
    }

    public start(): void {
        
    }

    public step(): void {
        
        let destructables = super.world.getComponents<Destructable>(Destructable.NAME);

        for(let i = 0; i < destructables.length; i++) {
            let destructable = destructables[i];
            if(destructable.curHealth <= 0) {
                this.destroy(destructable);
            }
        }
    }

    private destroy(destr: Destructable): void {

        destr.destroyed = true;
        
        let gridObj = destr.getSibling<GridObject>(GridObject.NAME);
        let grid = super.world.getComponent<Grid>(Grid.NAME);

        grid.removeObject(gridObj.position);
    }   
}

export { DestructableSystem }