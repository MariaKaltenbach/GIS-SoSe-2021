import * as Http from "http";
import * as Url from "url";
// import * as Mongo from "mongodb";

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


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pfad: string = <string>url.pathname;
            if (pfad == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
    // let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    // await mongoClient.connect();
    // let orders: Mongo.Collection = mongoClient.db("Test").collection("Students");
    // orders.insert({ ...});
}