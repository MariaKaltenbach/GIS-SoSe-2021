import * as Http from "http";
import * as Url from "url";

export namespace P_3_1Server {
    console.log("Starting server"); 
    let port: number = Number(process.env.PORT);
    if (!port) 
        port = 8100; 

    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest); 
    server.addListener("listening", handleListen); 
    server.listen(port); 

    function handleListen(): void {
        console.log("Listening"); 
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!"); 
        console.log(_request.url); 
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*"); 
        _response.write(_request.url); 

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true); //umwandeln in assoziatives Array, um Daten später rauszulesen 
            let pfad: string = <string>url.pathname; //pathname der Url in String speichern
            if (pfad == "/html") { //um hier Überprüdung machn zu können, ob welchen path man gegenagen ist 
                for (let key in url.query) {
                    _response.write(key + ":" + url.query [key] + "<br/>"); 
                }  
            }
            else if (pfad == "/json") { //um hier Überprüdung machn zu können, welchen path man gegangen ist 
                let jsonString: string = JSON.stringify(url.query); 
                console.log(jsonString); //in Konsole
                _response.write(jsonString); //Anwort, die zurückkommt   
            }
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
}