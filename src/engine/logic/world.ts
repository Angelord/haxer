
import { Component } from "./components/component"
import { Entity } from "./entity";
import { Grid } from "./components/grid";
import { GridObject } from "./components/gridObject";
import { Destructable } from "./components/destructable";

class World {
    
    private _entities: Array<Entity>;
    private _entityLookup: Map<number, Entity>;
    private _componentLookup: Map<string, Array<Component>>;

    public get entities(): Array<Entity> { return this._entities; }

    constructor() {
        this._entities = new Array<Entity>();
        this._entityLookup = new Map<number, Entity>();
        this._componentLookup = new Map<string, Array<Component>>();
    }

    addEntity<T extends Entity>(entity: T): T {

        for(var i = 0; i < entity.components.length; i++) {
            let component = entity.components[i];
            if(!this._componentLookup.has(component.name)) {
                this._componentLookup.set(component.name, new Array<Component>());
            }
            this._componentLookup.get(component.name).push(component); 
        }

        this._entities.push(entity);
        this._entityLookup.set(entity.id, entity);
        return entity;
    }

    getEntities(name: string): Entity[] {
        let result = this._entities.filter((entity) => {
            return entity.name == name;
        });
        return result;
    }
     
    getComponent<T extends Component>(typeName: string): T {
        let components = this.getComponents<T>(typeName);
        if(components.length == 0) {
            return null;
        }
        return components[0];
    }

    getComponents<T extends Component>(typeName: string): Array<T> {
        if(!this._componentLookup.has(typeName)) {
            return [];
        }
        return (this._componentLookup.get(typeName) as T[]);
    }

    // getSendable(): any {

    //     let sendableWorld: any = {};

    //     let gridComp = this.getComponent<Grid>(Grid.NAME);

    //     sendableWorld.width = gridComp.width;
    //     sendableWorld.length = gridComp.length;
    //     sendableWorld.walls = [];

    //     let walls = this.getEntities("Wall");
    //     walls.forEach((wall) => {

    //         let gridObjComp = wall.getComponent<GridObject>(GridObject.NAME);
    //         let destrComp = wall.getComponent<Destructable>(Destructable.NAME);
    //         let sendableWall = {
    //             x           : gridObjComp.position.x,
    //             y           : gridObjComp.position.y,
    //             curHealth   : destrComp.curHealth,
    //             maxHealth   : destrComp.maxHealth
    //         };

    //         sendableWorld.walls.push(sendableWall);
    //     });

    //     return sendableWorld;
    // }
}

export { World }
