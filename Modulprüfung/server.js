"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulprüfung = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Modulprüfung;
(function (Modulprüfung) {
    let databaseUrl = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
    async function registration(_url, _user) {
        await mongoClient.connect();
        let orders = mongoClient.db("Test").collection("Students");
        orders.insert(_user);
        let response = "Erfolgreich Registriert!";
        return response;
    }
    async function handleRequest(_request, _response) {
        console.log("Anfrage genehmigt!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //header wird festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //header wird festgelegt
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let input = { mail: url.query.mail + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };
            if (url.pathname == "/registration") {
                let daten = await registration(databaseUrl, input); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
                console.log("Registriert");
            }
            else if (url.pathname == "/login") {
                console.log("Eingeloggt");
            }
        }
        _response.end(); //anfrage wird beendet
    }
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE
})(Modulprüfung = exports.Modulprüfung || (exports.Modulprüfung = {}));
//# sourceMappingURL=server.js.map