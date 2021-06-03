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
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pathname: string = <string>url.pathname;                         //variable pathname anlegen um prüfen zu können wo wir uns befinden
            if (pathname == "/json") {                                           //wenn wir json button klicken dann soll folgendes passieren 
                let jsonString: string = JSON.stringify(url.query);             //die url in einen json sting umwandeln 
                console.log(jsonString);                                        //auf console ausgebenb lassen 
                _response.write(jsonString);
            }
        else if (pathname == "/html") {                                         //wenn wir html button klicken dann soll folgendes passieren 
            for (let key in url.query) {
                _response.write (key + ":" + url.query[key] + "<br/>");         
                       
            }
        }
    }
        _response.end();
    }
}