import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Modulprüfung {

    let databaseUrl: string = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    // let databaseUrl: string = "mongodb://localhost:27017";

    interface User {
        mail: string;
        benutzername: string;
        password: string;
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


    async function registration(_url: string, _user: User): Promise<string> {

        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("Test").collection("Students");
        orders.insert(_user);
        let response: string = "Erfolgreich Registriert!";
        return response;
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Anfrage genehmigt!");
        _response.setHeader("content-type", "text/html; charset=utf-8");    //header wird festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*");            //header wird festgelegt

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let input: User = { mail: url.query.mail + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };

            if (url.pathname == "/registration") {
                let daten: string = await registration(databaseUrl, input); //wartet bis die function die die daen speichert fertig ist
                _response.write(daten);
                console.log("Registriert");
            }
            else if (url.pathname == "/login") {
                console.log("Eingeloggt");
            }
        }

        _response.end();                                                    //anfrage wird beendet
    }
    //Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") ENDE

}
