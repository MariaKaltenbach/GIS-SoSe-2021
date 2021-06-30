
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Modulprüfung {

    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") 
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);

    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE
    interface User {
        password: string;
        benutzername: string;
        email: string;
    } //Interface für user angelegt

    interface Recepie {
        zutat1: string;
        zutat2: string;
        zutat3: string;
        zutat4: string;
        zutat5: string;
        zutat6: string;
        zutat7: string;
        zutat8: string;
        zutat9: string;
        zutat10: string;
        zubereitung: string;
    }
    // let databaseUrl: string = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
    let databaseUrl: string = "mongodb://localhost:27017";
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt

    let result: User[]; //ergenbis in User interface form ausgeben lassen



    async function saveUser(_url: string, _eingabe: User): Promise<string> {
        await mongoClient.connect();        //warten bis die verbindung mit der datenbank besteht 

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
        let serverResponse: string = "Daten wurden gespeichert";        //server antwort sobald die Dtaen erfolgreich gespeichert wurden 
        return serverResponse;
    }



    async function getRecepies(_url: string): Promise<User[]> {

        await mongoClient.connect(); //wartet bis man mit mongoclient verbunden ist 

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        let cursor: Mongo.Cursor = infos.find(); //datenbvank wird durchsucht 
        result = await cursor.toArray(); //datenbank wird ausgelesen
        return result;          //daten werden zurück gegeben

    }

    async function saveRecepie(_url: string, _eingabe: Recepie): Promise<string> {

        await mongoClient.connect();        //warten bis die verbindung mit der datenbank besteht 

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
        let serverResponse: string = "Rezept wurden gespeichert";        //server antwort sobald die Dtaen erfolgreich gespeichert wurden 
        return serverResponse;
    }
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") 
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Anfrage genemigt!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let auswertung: User = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };
            let auswerten: Recepie = { zutat10: url.query.Zutat + "", zutat9: url.query.Zutat + "", zutat8: url.query.Zutat + "", zutat7: url.query.Zutat + "", zutat6: url.query.Zutat + "", zutat5: url.query.Zutat + "", zutat4: url.query.Zutat + "", zutat3: url.query.Zutat + "", zutat2: url.query.Zutat + "", zutat1: url.query.Zutat + "", zubereitung: url.query.Zubereitung + "" };
            if (url.pathname == "/registration") {
                let daten: string = await saveUser(databaseUrl, auswertung); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/getRecepies") {
                let antwort: User[] = await getRecepies(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
                // console.log(antwort);
                _response.write(JSON.stringify(antwort));
            }
            else if (url.pathname == "/recepies") {
                let data: string = await saveRecepie(databaseUrl, auswerten);
                _response.write(data);
            }
        }



        _response.end();

    }


}
