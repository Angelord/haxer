import { World } from "../world";

abstract class System {

    private _world: World;

    public set world(value: World) { this._world = value; }
    public get world(): World { return this._world; }

    constructor(world: World = null) {
        this._world = world;
    }

    public abstract start(): void;
    public abstract step(): void;
}

export { System }