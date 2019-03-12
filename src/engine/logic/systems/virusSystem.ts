import { System } from "./system";
import { World } from "../world";

class VirusSystem extends System {

    constructor(world: World) {
        super(world);
    }

    public start(): void {
        
    }

    public step(): void {

        throw new Error("Method not implemented.");
        
        //TODO: Do virus actions
    }
}

export { VirusSystem }