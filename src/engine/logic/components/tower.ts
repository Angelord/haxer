
import { Component } from "./component"

class Tower extends Component {
    
    static readonly NAME: string = "Tower";

    public range: number;
    public damage: number;

    public get name(): string { return Tower.NAME; } 
}

export { Tower };