"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
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
    let databaseUrl = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
    // let databaseUrl: string = "mongodb://localhost:27017";
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let data; //Mongo collections angelegt
    let mongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt
    let result; //ergenbis in User interface form ausgeben lassen
    async function connecttoDatabase() {
        await mongoClient.connect(); //warten bis der Mongo client sich mit der datenban verbunden hat
        console.log(`Datenbank mit Url verbunden: ${databaseUrl}`); //wenn dies erfolgreich war wird das ausgegeben
        data = mongoClient.db("Test").collection("Students");
        let cursor = data.find();
        result = await cursor.toArray();
        console.log(result);
    }
    connecttoDatabase();
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        console.log(url);
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/safeData") {
                data.insertOne(url.query); //wenn man daten speichenr klickt dann werden die daten eingefügt
            }
            if (url.pathname == "/getData") {
                _response.write(JSON.stringify(await (data.find().toArray()))); //wenn man daten anfordert werden die daten gesucht und in jason string gewandelt
            }
            _response.end();
        }
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map