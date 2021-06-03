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
            let url = Url.parse(_request.url, true);
            let pathname = url.pathname; //variable pathname anlegen um prüfen zu können wo wir uns befinden
            if (pathname == "/json") { //wenn wir json button klicken dann soll folgendes passieren 
                let jsonString = JSON.stringify(url.query); //die url in einen json sting umwandeln 
                console.log(jsonString); //auf console ausgebenb lassen 
                _response.write(jsonString);
            }
            else if (pathname == "/html") { //wenn wir html button klicken dann soll folgendes passieren 
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + "<br/>");
                }
            }
        }
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map