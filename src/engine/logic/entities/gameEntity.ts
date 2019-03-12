import { Entity } from "../entity";
import { GameState } from "../components/gameState";

class GameStateEntity extends Entity {
    
    public constructor() {
        super("Game");

        this.addComponent(GameState);
    }
}

export { GameStateEntity }