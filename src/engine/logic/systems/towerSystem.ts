import { System } from "./system";
import { World } from "../world";
import { Tower } from "../components/tower";
import { Grid } from "../components/grid";
import { GridObject } from "../components/gridObject";
import { Destructable } from "../components/destructable";

class TowerSystem extends System {

    constructor(world: World) {
        super(world);
    }

    public start(): void {
        
    }

    public step(): void {

        let towers = super.world.getComponents<Tower>(Tower.NAME);

        for(let i = 0; i < towers.length; i++) {

            let tower = towers[i];
            
            this.handleTower(tower);
        }
    }

    private handleTower(tower: Tower): void {

        let destrComp = tower.getSibling<Destructable>(Destructable.NAME);
        if(destrComp.destroyed) {
            return;
        }
        
        let gridObjComp = tower.getSibling<GridObject>(GridObject.NAME);       

        let attackArea = gridObjComp.grid.getArea(gridObjComp.position, tower.range);
        for(let i = 0; i < attackArea.length; i++) {

            let targetObj = gridObjComp.grid.getObject(attackArea[i]);
            if(targetObj != null && this.tryAttackTarget(tower, targetObj)) {
                return;
            }
        }
    }

    private tryAttackTarget(tower: Tower, targetObj: GridObject): boolean {
        
        if(!tower.isEnemy(targetObj.entity)) {
            return false;
        }

        let destrComp = targetObj.getSibling<Destructable>(Destructable.NAME);
        if(destrComp == null) {
            return false;
        }


        //Begin record change
        destrComp.curHealth -= tower.damage;
        //End record change

        return true;
    }
}

export { TowerSystem }