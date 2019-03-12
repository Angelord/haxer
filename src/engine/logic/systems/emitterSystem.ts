import { System } from "./system";
import { World } from "../world";
import { Component } from "../components/component";
import { Entity } from "../entity";

/**
 * Notifies the remote player of the game state at every step of the simulation.
 */
class EmitterSystem extends System {
    
    private _playerSocket: any;

    constructor(world: World, playerSocket: any) {
        super(world);

        this._playerSocket = playerSocket;
    }

    public start(): void { }

    public step(): void {
        
        let states: any = [];

        this.world.entities.forEach((entity: Entity) => {

            let newState = new EntityState(entity);
            
            states.push(newState);
        });

        this._playerSocket.emit("simulation_step", JSON.stringify(states));
    }
}

class WorldModel { };

class EntityState {

    public id: number;
    public componentStates: any[];

    constructor(entity: Entity) {

        this.id = entity.id;

        entity.components.forEach((component: Component) => {
            this.componentStates.push(new ComponentState(component));        
        });
    }
}

class ComponentState {

    public componentName: string;
    public properties: any;

    constructor(component: any) {

        this.componentName = component.name;

        for(var key in component) {
            if(component.hasOwnProperty(key) && typeof component[key] !== 'function') {
                this.properties[key] = component[key];
            }
        }        
    }
}

export { EmitterSystem }