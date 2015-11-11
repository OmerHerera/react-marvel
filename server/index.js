var WebSocketServer   = require("ws").Server
    , wss
    , config = {
        url: "ws://127.0.0.1",
        port: 9090

    }
    , characters = require("./../data/characters")
    , comics = require("./../data/comics")

/**
 msg: {
    type: "get"
    query: "*"
 }
 */
//function _getData (msg) {
//    var msgObj = JSON.parse(msg);
//    if (msgObj.type === "get" && msgObj.type === "*") {
//        return characters.data.results;
//    }
//}

function _start () {
    wss = new WebSocketServer({url: config.url, port: config.port});
    wss.on("connection", function(ws) {
        console.log("Client open a Connection");

        ws.on("message", function(message) {
            console.log("received: %s", message);
            var msgObj = JSON.parse(msg);
            if (msgObj.type === "characters" && msgObj.type === "*") {
                return characters.data.results;
            }

        });

        ws.on("close", function() {
            console.log("Client closed a Connection");
        });

    });

    console.log("ws started url: " + config.url + " port:" + config.port);
}

function _stop () {
    console.log("unit-server stopped");
    wss.close();
}

exports.start = _start;
exports.stop = _stop;

_start();
