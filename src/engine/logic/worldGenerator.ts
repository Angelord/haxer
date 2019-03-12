import { World } from "./world";
import { Point } from "./types/point";
import { Entity } from "./entity";
import { GameStateEntity } from "./entities/gameEntity";
import { GridEntity } from "./entities/gridEntity";
import { WallEntity } from "./entities/WallEntity";
import { TowerEntity } from "./entities/towerEntity";
import { GridModel } from "../models/grid";
import { GridObject } from "./components/gridObject";

class WorldGenerator {

    private static entityCreators: any = {
        '*' : function(): Entity { return null },
        'W' : function(): Entity { return new WallEntity(3); }
    };

    public static generate(model: GridModel) : World {

        let world = new World();

        world.addEntity(new GameStateEntity());

        let width = model.symbols[0].length;
        let length = model.symbols.length;

        let grid = world.addEntity(new GridEntity(width, length));

        for(let y = 0; y < model.symbols.length; y++) {
            for(let x = 0; x < model.symbols[y].length; x++) {

                let symbol = model.symbols[y][x];
                
                let gridObj: Entity = this.entityCreators[symbol]();
                let gridObjComp = gridObj.getComponent<GridObject>(GridObject.NAME);

                grid.gridComp.placeObject(gridObjComp, new Point(x, y));
            }
        }

        return world;
    };
};

export { WorldGenerator }