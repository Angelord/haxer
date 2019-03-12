
import { Entity } from "../entity"

abstract class Component {

    private _entity: Entity;

    public get entity(): Entity { return this._entity; }
    public abstract get name(): string;

    constructor(entity: Entity) {
        this._entity = entity;
    }

    public isEnemy(other: Entity) {
        return this._entity.isEnemy(other);
    }

    public getSibling<T extends Component>(typeName: string): T {
        return this._entity.getComponent<T>(typeName);
    }
}

export { Component };