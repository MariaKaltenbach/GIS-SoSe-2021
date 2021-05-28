"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    //"Startng Server" wird auf der console ausgegeben
    console.log("Starting server");
    //enviroment mit der Angabe der Portnummer von Heroku
    let port = Number(process.env.PORT);
    //wenn port nicht definiert ist (keiner von heroku zugewiesen wurde), wird port nr. 8100 aufgerufen
    if (!port)
        port = 8100;
    //server wird erstellt    
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server horcht auf port
    server.listen(port);
    //es wird auf der cosnole ausgegeben wenn der server funktioniert 
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //Header wird festgelegt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        //sicherheitsmechanisemn werden abgeschaltet
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //die Url der anfrage mit der antwort wird angezeigt
        _response.write(_request.url);
        //und aud der console ausgegeben
        console.log(_request.url);
        //antwort wird beendet
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map