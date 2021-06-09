"use strict";
/*import * as Http from "http";

export namespace P_3_1Server {
    console.log("Starting server"); //Starting server wird ausgegeben
    let port: number = Number(process.env.PORT);
    if (!port) //Port == "Hafen"
        port = 8100; //Port wird mit dem Wert 8100 initialisiert

    let server: Http.Server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der die Funktion handleRequest aufruft
    server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der die Funktion handleListen aufruft
    server.listen(port); //Der Server hört auf den port

    function handleListen(): void {
        console.log("Listening"); // Listening wird in der Konsole ausgegeben
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); //I hear voices wird im Terminal ausgegeben
        console.log(_request.url); //Die URL vom Request wird ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Die Eigenschaften des Headers werden festgelegt mit setHeader
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung wird festgelegt, wer hat Zugriff?
        _response.write(_request.url); //Die Url vom Request wird in die Response geschrieben
        _response.end(); //Die Response wird beendet
    }
}*/ 
//# sourceMappingURL=server.js.map