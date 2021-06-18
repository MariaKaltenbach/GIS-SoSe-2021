import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe3_4 {

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

    interface User {
        password: string;
        benutzername: string;
        alter: number;
        email: string;
    } //Interface für user angelegt

    let databaseUrl: string = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
    // let databaseUrl: string = "mongodb://localhost:27017";
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let data: Mongo.Collection;  //Mongo collections angelegt
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt

    let result: User[]; //ergenbis in User interface form ausgeben lassen

    async function connecttoDatabase(): Promise<void> {
        await mongoClient.connect();   //warten bis der Mongo client sich mit der datenban verbunden hat
        console.log(`Datenbank mit Url verbunden: ${databaseUrl}`); //wenn dies erfolgreich war wird das ausgegeben
        data = mongoClient.db("Test").collection("Students"); 
        let cursor: Mongo.Cursor = data.find();
        result = await cursor.toArray();
        console.log(result);

    }
    connecttoDatabase();



    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");


        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        console.log(url);

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/safeData") {
                data.insertOne(url.query);  //wenn man daten speichenr klickt dann werden die daten eingefügt
            }
            if (url.pathname == "/getData") {
                _response.write(JSON.stringify(await(data.find().toArray()))); //wenn man daten anfordert werden die daten gesucht und in jason string gewandelt
            }

            _response.end(); 
        }

      
     } }