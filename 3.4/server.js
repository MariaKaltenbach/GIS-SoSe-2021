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
    async function connecttoDatabase(_url) {
        await mongoClient.connect(); //warten bis der Mongo client sich mit der datenbank verbunden hat
        console.log(`Datenbank mit Url verbunden: ${databaseUrl}`); //wenn dies erfolgreich war wird das ausgegeben
        data = mongoClient.db("Test").collection("Students");
        let cursor = data.find(); //daten in der db finden
        result = await cursor.toArray(); //gibt array zurück
        console.log(result);
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        console.log(url);
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let eingabe = { benutzername: url.query.benutzername + "", email: url.query.email + "", password: url.query.password + "" };
            if (url.pathname == "/safeData") {
                let daten = await safe(databaseUrl, eingabe); //
                _response.write(daten);
            }
            if (url.pathname == "/getData") {
                let antwort = await connecttoDatabase(databaseUrl);
                console.log(antwort);
                _response.write(JSON.stringify(antwort)); //wenn Daten abgeschickt sind und in DB speichern            }
                _response.end();
            }
            async function safe(_url, _eingabe) {
                data = mongoClient.db("Test").collection("Students");
                data.insertOne(_eingabe); //eingegebene Daten in DB speichern
                let antwort = "Daten wurden gespeichert";
                return antwort;
            }
        }
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//# sourceMappingURL=server.js.map