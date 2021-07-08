"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulprüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Modulprüfung;
(function (Modulprüfung) {
    //#region Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") 
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    async function handleRequest(_request, _response) {
        console.log("Anfrage genemigt!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //#endregion Interface
        //#rehgion Variablen (varibalen für Mongo angelegt)
        let databaseUrl = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
        // let databaseUrl: string = "mongodb://localhost:27017";
        let option = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(databaseUrl, option); //mongo client angelegt
        // let rezepte: Mongo.Collection;
        let Students;
        //#endregion Variablen
        let result; //ergenbis in User interface form ausgeben lassen
        //#region asynchrone Funktionen 
        async function saveUser(_url, _eingabe) {
            await mongoClient.connect(); //warten bis die verbindung mit der datenbank besteht 
            let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
            infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
            let serverResponse = "Daten wurden gespeichert"; //server antwort sobald die Dtaen erfolgreich gespeichert wurden 
            return serverResponse;
        }
        async function getRecepie(_url) {
            let option = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(databaseUrl, option); //mongo client angelegt
            await mongoClient.connect(); //wartet bis man mit mongoclient verbunden ist 
            let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
            let cursor = infos.find(); //datenbvank wird durchsucht 
            result = await cursor.toArray(); //datenbank wird ausgelesen
            return result; //daten werden zurück gegeben
        }
        async function saveRecepie(_url, _eingabe) {
            await mongoClient.connect(); //warten bis die verbindung mit der datenbank besteht 
            let infos = mongoClient.db("Test").collection("Rezepte"); //meine collection wird aufgerufen
            infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
            let serverResponse = "Rezept wurden gespeichert"; //server antwort sobald die Dtaen erfolgreich gespeichert wurden 
            return serverResponse;
        }
        //#endregion asynchrone Funktionen
        //#region Variablen 
        let url = Url.parse(_request.url, true);
        let auswertung = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };
        let auswerten = { rezeptname: url.query.rezeptname + "", zutat1: url.query.Zutat + "", zutat2: url.query.Zutat + "", zutat3: url.query.Zutat + "", zutat4: url.query.Zutat + "", zutat5: url.query.Zutat + "", zutat6: url.query.Zutat + "", zutat7: url.query.Zutat + "", zutat8: url.query.Zutat + "", zutat9: url.query.Zutat + "", zutat10: url.query.Zutat + "", zubereitungshinweis: url.query.Zubereitung + "" };
        //#endregion Variablen
        //#region if-Abfragen (prüft welchen pfad der User nimmt um den richtigen code auszuführen)
        if (_request.url) {
            if (url.pathname == "/registration") {
                let daten = await saveUser(databaseUrl, auswertung); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/userLogin") {
                let findUser = await Students.findOne({ "benutzername": url.query.Students.toString(), "password": url.query.Students.toString });
                if (findUser != undefined) {
                    alert("User wird eingeloggt");
                }
                else {
                    alert("User kann nicht eingeloggt werden");
                }
            }
            else if (url.pathname == "/getRecepie") {
                let antwort = await getRecepie(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
                console.log(antwort);
                _response.write(JSON.stringify(antwort));
            }
            else if (url.pathname == "/safeRecepie") {
                let data = await saveRecepie(databaseUrl, auswerten);
                _response.write(data);
            }
            // if (url.pathname == "/deleteRecepie") {
            //     rezepte.deleteOne({"Rezept:": new Mongo.ObjectID(url.query._id.toString())});
            //     console.log("Rezept wurde gelöscht!");
            // }
        }
        //#endregion if-Abfragen
        _response.end(); //beendet die anfrage 
    }
})(Modulprüfung = exports.Modulprüfung || (exports.Modulprüfung = {}));
//# sourceMappingURL=server.js.map