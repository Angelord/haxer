import { Entity } from "../entity";
import { GridObject } from "../components/gridObject";
import { Destructable } from "../components/destructable";
import { Tower } from "../components/tower";


class TowerEntity extends Entity {


    public constructor(health: number, range: number, damage: number) {
        super("Tower");

        this.addComponent(GridObject);

        let destrComp = this.addComponent(Destructable);
        destrComp.maxHealth = health;
        destrComp.curHealth = health;
     
        let towerComp = this.addComponent(Tower);
        towerComp.range = range;
        towerComp.damage = damage;
    }
}

export { TowerEntity }