
import { Component } from "./components/component"
import { Tower } from "./components/tower"
import { GridObject } from "./components/gridObject"
import { Destructable } from "./components/destructable"

class Entity {

    private static lastId: number = 0;
    public team: number;
    private _id: number;
    private _name: string;
    private _components: Array<Component>;
    
    public get id(): number { return this._id; }
    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }
    public get components(): Array<Component> { return this._components; } 

    protected constructor(name: string) {
        this._id = ++Entity.lastId;
        this._name = name;
        this._components = new Array<Component>();
    }

    isEnemy(other: Entity) {
        return (other.team != this.team);
    }

    addComponent<T extends Component>(type: { new(entity: Entity): T ;} ): T {
        var newComp = new type(this);
        this._components.push(newComp);
        return newComp;
    }

    getComponent<T extends Component>(typeName: string) : T {
        for(var i = 0; i < this._components.length; i++) {
            if(this._components[i].name == typeName) {
                return this._components[i] as T;
            }
        }
        return null;
    }
}

export { Entity };