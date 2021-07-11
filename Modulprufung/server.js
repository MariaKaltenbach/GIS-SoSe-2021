"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulprüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Modulprüfung;
(function (Modulprüfung) {
    //#region Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") 
    //https://felix.hs-furtwangen.de/auth/RepositoryEntry/4015784382/CourseNode/103149246622861 
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //Port wird mit dem Wert 8100 initialisiert
    let server = Http.createServer(); //Server wird erstellt
    server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der die Funktion handleRequest aufruft
    server.listen(port); //Der Server hört auf den port
    async function handleRequest(_request, _response) {
        console.log("Anfrage genemigt!"); //wird im terminal ausgegeben
        console.log(_request.url); //Die URL vom Request wird ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Die Eigenschaften des Headers werden festgelegt mit setHeader
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Zugangsberechtigung wird festgelegt, wer hat Zugriff?
        //#endregion Interface
        //#region Variablen (varibalen für Mongo angelegt)
        let databaseUrl = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
        // let databaseUrl: string = "mongodb://localhost:27017";
        let option = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(databaseUrl, option); //mongo client angelegt
        let student;
        //#endregion Variablen
        let result; //ergenbis in User interface form ausgeben lassen
        //#region asynchrone Funktionen 
        async function saveUser(_url, _eingabe) {
            await mongoClient.connect(); //warten bis die verbindung mit der datenbank besteht 
            let infos = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
            infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
            let serverResponse = "Daten wurden gespeichert"; //server antwort sobald die Daten erfolgreich gespeichert wurden 
            return serverResponse;
        }
        async function getRecepie(_url) {
            await mongoClient.connect(); //wartet bis man mit mongoclient verbunden ist 
            let infos = mongoClient.db("Test").collection("Rezepte"); //meine collection wird aufgerufen
            let cursor = infos.find(); //Datenbank wird durchsucht 
            result = await cursor.toArray(); //datenbank wird ausgelesen
            return result; //daten werden zurück gegeben
        }
        async function saveRecepie(_url, _eingabe) {
            await mongoClient.connect(); //warten bis die verbindung mit der datenbank besteht 
            let infos = mongoClient.db("Test").collection("Rezepte"); //meine collection wird aufgerufen
            infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
            let serverResponse = "Rezept wurden gespeichert"; //server antwort sobald die Daten erfolgreich gespeichert wurden 
            return serverResponse;
        }
        async function getFavorite(_url) {
            await mongoClient.connect(); //warten bis die verbindung mit der datenbank besteht 
            let infos = mongoClient.db("Test").collection("Favoriten"); //meine collection wird aufgerufen
            let cursor = infos.find(); //Datenbank wird durchsucht 
            result = await cursor.toArray(); //datenbank wird ausgelesen
            return result; //daten werden zurück gegeben
        }
        // async function likesRecepie(_url: string, _eingabe: Recepie): Promise<void> {
        //     let favorisieren: any = await mongoClient.db("Test").collection("Favoriten").insertOne({"rezeptname": result});
        // }
        //#endregion asynchrone Funktionen
        //#region Variablen 
        let url = Url.parse(_request.url, true);
        let evaluationUser = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };
        let evaluationRecepie = { rezeptname: url.query.rezeptname + "", zutat1: url.query.Zutat + "", zutat2: url.query.Zutat + "", zutat3: url.query.Zutat + "", zutat4: url.query.Zutat + "", zutat5: url.query.Zutat + "", zutat6: url.query.Zutat + "", zutat7: url.query.Zutat + "", zutat8: url.query.Zutat + "", zutat9: url.query.Zutat + "", zutat10: url.query.Zutat + "", zubereitungshinweis: url.query.Zubereitung + "" };
        //#endregion Variablen
        //#region if-Abfragen (prüft welchen pfad der User nimmt um den richtigen code auszuführen)
        if (_request.url) {
            if (url.pathname == "/registration") {
                let userWait = await saveUser(databaseUrl, evaluationUser); //wartet bis die function die die Daten speichert fertig ist
                _response.write(userWait);
            }
            else if (url.pathname == "/userLogin") {
                await student.findOne({ "username": url.query.username, "password": url.query.password }); //wartet bis die daten aus der datenbank gefunden wurden 
            }
            else if (url.pathname == "/getRecepie") {
                let recepieWait = await getRecepie(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
                _response.write(JSON.stringify(recepieWait)); //die antwort wird in einen JSON string umgewandelt
            }
            else if (url.pathname == "/getFave") {
                let favWait = await getFavorite(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
                _response.write(JSON.stringify(favWait));
            }
            else if (url.pathname == "/safeRecepie") {
                let saveRecepieWait = await saveRecepie(databaseUrl, evaluationRecepie); //wartet bis die function die die daten abgespeichert hat
                _response.write(saveRecepieWait);
            }
            // else if (url.pathname == "/safeFave") {
            //     let waitFav: Recepie[] = await likesRecepie(databaseUrl, evaluationRecepie);
            //     _response.write(waitFav);
            // }
            //#endregion if-Abfragen
            _response.end(); //beendet die anfrage 
        }
    }
})(Modulprüfung = exports.Modulprüfung || (exports.Modulprüfung = {}));
//# sourceMappingURL=server.js.map