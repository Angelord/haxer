
class GridModel {

    static readonly PLACEHOLDER: GridModel = new GridModel(
    [ 
        "********",
        "********",
        "*WWWWW**",
        "*W******",
        "***WW***",
        "********",
        "********",
        "********",
    ]);

    public symbols: string[];

    constructor(symbols: string[]) {
        this.symbols = symbols;
    }
}

export { GridModel }