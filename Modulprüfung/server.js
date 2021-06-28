"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulprüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Modulprüfung;
(function (Modulprüfung) {
    // let databaseUrl: string = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let databaseUrl = "mongodb://localhost:27017";
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") START
    console.log("Server wird gestartet!"); //wird ausgegeben, wenn der server angestellt wird 
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer(); //server wird erstellt
    server.addListener("request", handleRequest); //eventListener wird erstellt um die Function handleRequest bei einer Anfrage an den server aufzurufen
    server.listen(port);
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt
    async function safeRegistration(_url, _eingabe) {
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
        let serverResponse = "Daten wurden gespeichert";
        return serverResponse;
    }
    async function safeRecepie(_url, _rezept) {
        await mongoClient.connect();
        let orders = mongoClient.db("Test").collection("Rezepte");
        orders.insert(_rezept);
        let response = "Rezept wurde erfolgreich erstellt!";
        return response;
    }
    async function getAllRecepies(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let infos = mongoClient.db("Test").collection("Rezepte"); //eigene neue Collection aufrufen
        let cursor = infos.find(); //Suche der gesamten DB aber spezielle ist auch möglich mit .find({name: "..."})
        let ergebnis = await cursor.toArray(); //auslesen der kompletten DB
        return ergebnis;
    }
    async function handleRequest(_request, _response) {
        console.log("Anfrage genehmigt!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //header wird festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //header wird festgelegt
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let eingabe = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };
            if (url.pathname == "/safeRegistration") {
                let daten = await safeRegistration(databaseUrl, eingabe); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/safeRecepie") {
                let inputRezept = { gramm: url.query.Gramm + "", zutat2: url.query.Zutat + "", zutat1: url.query.Zutat + "", zubereitung: url.query.Zubereitung + "" };
                let daten = await safeRecepie(databaseUrl, inputRezept); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
                console.log("Rezept gespeichert!");
            }
            else if (url.pathname == "/getAllRecepies") {
                let response = await getAllRecepies(databaseUrl);
                console.log(response);
                _response.write(JSON.stringify(response)); //wenn Daten abgeschickt sind und in DB speichern
            }
            // else if (url.pathname == "/login") {
            //     console.log("Eingeloggt");
            // }
            // // else if (url.pathname == "/getAllRecepies") {
            // //     let antwort: Recepies[] = await getAllRecepies(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
            // //     console.log(antwort);
            //     _response.write(JSON.stringify(antwort));
            // }
        }
        _response.end(); //anfrage wird beendet
    }
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE
})(Modulprüfung = exports.Modulprüfung || (exports.Modulprüfung = {}));
//# sourceMappingURL=server.js.map