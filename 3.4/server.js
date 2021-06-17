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
    let databaseUrl = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    // let databaseUrl: string = "mongodb://localhost:27017";
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let data;
    let mongoClient = new Mongo.MongoClient(databaseUrl, options);
    let result;
    async function connecttoDatabase() {
        await mongoClient.connect(); //warten bis der Mongo client sich mit der datenban verbunden hat
        console.log(`Datenbank mit Url verbunden: ${databaseUrl}`); //wenn dies erfolgreich war wird das ausgegeben
        data = mongoClient.db("Test").collection("Students");
        let cursor = data.find();
        result = await cursor.toArray();
        console.log(result);
    }
    connecttoDatabase();
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        console.log(url);
        if (url.pathname == "/safeData") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            speichertDaten(url.query);
        }
        if (url.pathname == "/getData") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.write(JSON.stringify(result));
        }
        _response.end(); //Antwort fertig und zurückschicken 
    }
    function speichertDaten(_query) {
        data.insertOne(_query);
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map