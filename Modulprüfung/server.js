"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulprüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Modulprüfung;
(function (Modulprüfung) {
    let databaseUrl = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") START
    console.log("Server wird gestartet!"); //wird ausgegeben, wenn der server angestellt wird 
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer(); //server wird erstellt
    server.addListener("request", handleRequest); //eventListener wird erstellt um die Function handleRequest bei einer Anfrage an den server aufzurufen
    server.listen(port);
    async function handleRequest(_request, _response) {
        console.log("Anfrage genehmigt!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //header wird festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //header wird festgelegt
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let eingabe = { password: url.query.password + "", benutzername: url.query.benutzername + "", email: url.query.email + "" };
            let inputRezept = { zutat10: url.query.Zutat + "", zutat9: url.query.Zutat + "", zutat8: url.query.Zutat + "", zutat7: url.query.Zutat + "", zutat6: url.query.Zutat + "", zutat5: url.query.Zutat + "", zutat4: url.query.Zutat + "", zutat3: url.query.Zutat + "", zutat2: url.query.Zutat + "", zutat1: url.query.Zutat + "", zubereitung: url.query.Zubereitung + "" };
            if (url.pathname == "/safeRegistration") {
                let daten = await safeRegistration(databaseUrl, eingabe); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/safeRecepie") {
                let daten = await safeRecepie(databaseUrl, inputRezept); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
                console.log("Rezept gespeichert!");
            }
            else if (url.pathname == "/getAllRecepies") {
                let response = await getAllRecepies(databaseUrl);
                console.log(response);
                _response.write(JSON.stringify(response)); //wenn Daten abgeschickt sind und in DB speichern
            }
        }
        _response.end(); //anfrage wird beendet
    }
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE
    async function safeRegistration(_url, _user) {
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_user); //eingegebene Daten in DB speichern
        let serverResponse = "Daten wurden gespeichert";
        return serverResponse;
    }
    async function safeRecepie(_url, _rezept) {
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_rezept); //eingegebene Daten in DB speichern
        let serverResponse = "Rezept wurde erfolgreich erstellt!";
        return serverResponse;
    }
    async function getAllRecepies(_url) {
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Students"); //eigene neue Collection aufrufen
        let cursor = infos.find(); //Suche der gesamten DB aber spezielle ist auch möglich mit .find({name: "..."})
        let ergebnis = await cursor.toArray(); //auslesen der kompletten DB
        return ergebnis;
    }
})(Modulprüfung = exports.Modulprüfung || (exports.Modulprüfung = {}));
//# sourceMappingURL=server.js.map