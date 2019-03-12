///<reference path='./phaser.d.ts'/>
class GameClient {

    private _game: any;
    private _socket: any;

    constructor(socket: any) {
        this._socket = socket;

        let config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            banner: true,
            title: 'Haxer',
            version: '1.0.0',
            preload: this.preload,
            create: this.create
        }

        this._game = new Phaser.Game(config);

        socket.emit("request_simulation");

        socket.on("simulation_step", this.step);
    }

    private preload(): void {
        this._game.load.image('tile','assets/sprites/tile.png');
    }

    private create(): void {
        console.log("creating");
    }

    private commTest(msg: any): void {
        
    }

    private step(msg: any): void {

        let worldState = JSON.parse(msg);

        for(var i = 0; i < worldState.length; i++) {

        }
    }

}

