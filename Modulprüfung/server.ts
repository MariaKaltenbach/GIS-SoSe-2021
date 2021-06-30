import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Modulprüfung {

    let databaseUrl: string = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
    // let databaseUrl: string = "mongodb://localhost:27017";

    interface User {
        email: string;
        benutzername: string;
        password: string;
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

    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options); //mongo client angelegt

    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") START
    console.log("Server wird gestartet!");          //wird ausgegeben, wenn der server angestellt wird 
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();  //server wird erstellt
    server.addListener("request", handleRequest);   //eventListener wird erstellt um die Function handleRequest bei einer Anfrage an den server aufzurufen
    server.listen(port);






    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Anfrage genehmigt!");
        _response.setHeader("content-type", "text/html; charset=utf-8");    //header wird festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*");            //header wird festgelegt

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            let eingabe: User = { password: url.query.password + "", benutzername: url.query.benutzername + "", email: url.query.email + "" };
            let inputRezept: Recepie = { zutat10: url.query.Zutat + "", zutat9: url.query.Zutat + "", zutat8: url.query.Zutat + "", zutat7: url.query.Zutat + "", zutat6: url.query.Zutat + "", zutat5: url.query.Zutat + "", zutat4: url.query.Zutat + "", zutat3: url.query.Zutat + "", zutat2: url.query.Zutat + "", zutat1: url.query.Zutat + "", zubereitung: url.query.Zubereitung + "" };

            if (url.pathname == "/safeRegistration") {
                let daten: string = await safeRegistration(databaseUrl, eingabe); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
            }
            else if (url.pathname == "/safeRecepie") {
                let daten: string = await safeRecepie(databaseUrl, inputRezept); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
                console.log("Rezept gespeichert!");
            }
            else if (url.pathname == "/getAllRecepies") {
                let response: Recepie[] = await getAllRecepies(databaseUrl);
                console.log(response);
                _response.write(JSON.stringify(response)); //wenn Daten abgeschickt sind und in DB speichern
            }

        }

        _response.end();                                                    //anfrage wird beendet
    }

    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE


    async function safeRegistration(_url: string, _user: User): Promise<string> {

        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_user); //eingegebene Daten in DB speichern
        let serverResponse: string = "Daten wurden gespeichert";
        return serverResponse;
    }


    async function safeRecepie(_url: string, _rezept: Recepie): Promise<string> {

        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
        infos.insertOne(_rezept); //eingegebene Daten in DB speichern
      
        let serverResponse: string = "Rezept wurde erfolgreich erstellt!";
        return serverResponse;
    }




    async function getAllRecepies(_url: string): Promise<Recepie[]> { //bekommt Interface Array zurück

        await mongoClient.connect();

        let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //eigene neue Collection aufrufen
        let cursor: Mongo.Cursor = infos.find(); //Suche der gesamten DB aber spezielle ist auch möglich mit .find({name: "..."})
        let ergebnis: Recepie[] = await cursor.toArray(); //auslesen der kompletten DB
        return ergebnis;

    }



}
