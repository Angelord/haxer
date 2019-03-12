import { WorldGenerator } from "./logic/worldGenerator";
import { Game } from "./logic/game";
import { Email } from "./models/email";
import { World } from "./logic/world";
import { GridModel } from "./models/grid";

let socket      = require("socket.io");
let express     = require("express");
let http        = require("http");

let app         = express();
let httpServer  = http.Server(app);
let io          = socket(httpServer);

io.on("connection", function(socket: any){

    console.log("A user connected!");

    let world: World = null;
    let game = new Game(socket);

    socket.on("request_email", () => {
        console.log("Email requested");

        //TODO : Grab this from the database and only generate a new one if no pending 
        //ones are available or a lot of time has passed since the last mail was generated
        let mail = [];
        for(var i = 0; i < 5; i++) {
            mail.push(Email.generate(1));
        }

        socket.emit("answer_email", mail);
    });

    socket.on("request_grid", function(msg: any) {

        //TODO : Retrieve the model from the DB or generate a new one

        socket.emit("answer_grid", GridModel.PLACEHOLDER);
    });

    socket.on("request_simulation", function(msg: any) {

        console.log("Battle simulation requested");

        world = WorldGenerator.generate(GridModel.PLACEHOLDER);
        
        game.reset(world);
        let hackResult = game.simulate(msg); 

        socket.emit("answer_simulation", hackResult);

        //TODO: Update DB in the case of victory.
    });
});

var server = httpServer.listen(8081, (error: any) => {

    if (error) { return console.log("ERROR : " + error) }

    var host = server.address().address
    var port = server.address().port
 
    console.log("Listening at http://%s:%s", host, port)
});