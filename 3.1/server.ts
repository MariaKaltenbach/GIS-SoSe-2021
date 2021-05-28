import * as Http from "http";

export namespace P_3_1Server {
//"Startng Server" wird auf der console ausgegeben
console.log("Starting server");

//enviroment mit der Angabe der Portnummer von Heroku
let port: number = Number(process.env.PORT);

//wenn port nicht definiert ist (keiner von heroku zugewiesen wurde), wird port nr. 8100 aufgerufen
if (!port)
    port = 8100;

//server wird erstellt    
let server: Http.Server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
//Server horcht auf port
server.listen(port);

//es wird auf der cosnole ausgegeben wenn der server funktioniert 
function handleListen(): void {
    console.log("Listening");
}


function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
    //Header wird festgelegt
    _response.setHeader("content-type", "text/html; charset=utf-8");
    //sicherheitsmechanisemn werden abgeschaltet
    _response.setHeader("Access-Control-Allow-Origin", "*");
    //die Url der anfrage mit der antwort wird angezeigt
    _response.write(_request.url);
    //und aud der console des servers ausgegeben
    console.log(_request.url);
    //antwort wird beendet
    _response.end();
} }