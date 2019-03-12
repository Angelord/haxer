import { Component } from "./component";

/** 
* Represents a class for storing the status of the simulation. 
*/
class GameState extends Component {

    static readonly NAME: string = "Game";

    public over: boolean;
    public victory: boolean;

    public get name(): string { return GameState.NAME; } 
}

export { GameState }