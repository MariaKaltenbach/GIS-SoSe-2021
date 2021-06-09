"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        if (_request.url) {
            let url = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad = url.pathname; //pathname der Url in String speichern
            if (pfad == "/html") { //um hier Überprüdung machn zu können, ob welchen path man gegenagen ist 
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
            else if (pfad == "/json") { //um hier Überprüdung machn zu können, welchen path man gegangen ist 
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString); //in Konsole
                _response.write(jsonString); //Anwort, die zurückkommt   
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map