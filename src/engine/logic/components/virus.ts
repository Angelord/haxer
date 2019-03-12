import { Component } from "./component";

class Virus extends Component {
    
    static readonly NAME: string = "Virus";
    // modules[]
    //      name
    //      
    // commands[]
    //      name
    //      param
    
    public get name(): string { return Virus.NAME; } 

}

export { Virus }