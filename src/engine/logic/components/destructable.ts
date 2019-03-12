
import { Component } from "./component"

class Destructable extends Component {
    
    static readonly NAME: string = "Destructable";

    public curHealth: number;
    public maxHealth: number;
    public destroyed: boolean;

    public get name(): string { return Destructable.NAME; } 
}

export { Destructable };