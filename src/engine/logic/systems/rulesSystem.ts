import { System } from "./system";
import { Virus } from "../components/virus";
import { GameState } from "../components/gameState";
import { Destructable } from "../components/destructable";
import { GridObject } from "../components/gridObject";

/**
 * Responsible for checking defeat and victory conditions and updating the 
 * game state accordingly.
 */
class RulesSystem extends System {

    public start(): void {
        
    }

    public step(): void {

        let viruses = super.world.getComponents<Virus>(Virus.NAME);

        let survivingViruses = viruses.filter((virus) => {
            return !virus.getSibling<Destructable>(Destructable.NAME).destroyed;
        });

        if(survivingViruses.length == 0) {
            this.setGameOver(false);
            return;
        }

        for(let i = 0; i < survivingViruses.length; i++) {
            let virus = survivingViruses[i];
            let gridObj = virus.getSibling<GridObject>(GridObject.NAME);

            if(gridObj.position.y == gridObj.grid.length - 1) {
                this.setGameOver(true);
                return;
            }
        }
    }

    private setGameOver(victory: boolean): void {
        
        let game = super.world.getComponent<GameState>(GameState.NAME);
        
        game.over = true;
        game.victory = victory;
    }

}

export { RulesSystem }