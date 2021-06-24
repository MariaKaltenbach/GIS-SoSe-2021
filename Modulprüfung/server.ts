import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Modulprüfung {

    let databaseUrl: string = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    // let databaseUrl: string = "mongodb://localhost:27017";

    interface User {
        password: string;
        benutzername: string;
        email: string;
    } //Interface für user angelegt

    interface Recepie {
        gramm: string;
        zutat: string;
        zubereitung: string;
    }



    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") START
    console.log("Server wird gestartet!");          //wird ausgegeben, wenn der server angestellt wird 
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();  //server wird erstellt
    server.addListener("request", handleRequest);   //eventListener wird erstellt um die Function handleRequest bei einer Anfrage an den server aufzurufen
    server.listen(port);




    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt





   
    async function safe(_url: string, _eingabe: User): Promise<string> {
        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
        let serverResponse: string = "Daten wurden gespeichert";
        return serverResponse;
    }


    async function safeRecepie(_url: string, _rezept: Recepie): Promise<string> {

        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("Test").collection("Rezepte");
        orders.insert(_rezept);
        let response: string = "Rezept wurde erfolgreich erstellt!";
        return response;
    }



    // let result: Recepies[]; //ergenbis in User interface form ausgeben lassen


    // async function getAllRecepies(_url: string): Promise<Recepies[]> {
    //     let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    //     let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    //     await mongoClient.connect(); //wartet bis man mit mongoclient verbunden ist 

    //     let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
    //     let cursor: Mongo.Cursor = infos.find(); //datenbvank wirfd durchsucht 
    //     result = await cursor.toArray(); //datenbank wird ausgelesen
    //     return result;

    // }




    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Anfrage genehmigt!");
        _response.setHeader("content-type", "text/html; charset=utf-8");    //header wird festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*");            //header wird festgelegt

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            
            let eingabe: User = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };

            if (url.pathname == "/safeRegistration") {
                let daten: string = await safe(databaseUrl, eingabe); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/safeRecepie") {
                let inputRezept: Recepie = {gramm: url.query.gramm + "", zutat: url.query.zutat + "", zubereitung: url.query.zubereitung + "" };
                let daten: string = await safeRecepie(databaseUrl, inputRezept); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
                console.log("Rezept gespeichert!");
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

        _response.end();                                                    //anfrage wird beendet
    }
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE

}
