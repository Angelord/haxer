import { World } from "./world";
import { HackResult } from "./hackResult";
import { GameState } from "./components/gameState";
import { VirusSystem } from "./systems/virusSystem";
import { TowerSystem } from "./systems/towerSystem";
import { DestructableSystem } from "./systems/destructableSystem";
import { System } from "./systems/system";
import { EmitterSystem } from "./systems/emitterSystem";

class Game {

    static readonly MAX_STEPS = 300;

    private _systems: Array<System> = new Array<System>();
    private _world: World;

    constructor(playerSocket: any) {
        this._systems.push(new VirusSystem(null));
        this._systems.push(new TowerSystem(null));
        this._systems.push(new DestructableSystem(null));
        this._systems.push(new EmitterSystem(null, playerSocket));
    }

    public reset(world: World) {
        this._world = world;

        this._systems.forEach((sys) => {
            sys.world = world;
        });
    }

    public simulate(config: any): HackResult {

        let game: GameState = this._world.getComponent<GameState>("Game");
        if(game == null) {
            throw("No Game entity found in world!");
        }

        this._systems.forEach((sys) => {
            sys.start();
        });

        let steps = 0;
        while(!game.over && steps <= Game.MAX_STEPS) {
            
            this._systems.forEach((sys) => {
                sys.step();
            });  
            
            steps++;
        }

        return new HackResult();
    }
};


/*
Hack configuration :
   viruses [ ]
        behaviour: string
*/

export { Game }