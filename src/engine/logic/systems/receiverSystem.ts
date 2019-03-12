import { System } from "./system";
import { World } from "../world";

class ReceiverSystem extends System {

    private _socket: any;

    public constructor(world: World, socket: any) {
        super(world);

        this._socket = socket;
    }

    public start(): void { }    
    
    public step(): void { }
}

export { ReceiverSystem }