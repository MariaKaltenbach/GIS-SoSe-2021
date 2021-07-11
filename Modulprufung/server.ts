import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Modulprüfung {

    //#region Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") 
    //https://felix.hs-furtwangen.de/auth/RepositoryEntry/4015784382/CourseNode/103149246622861 

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;    //Port wird mit dem Wert 8100 initialisiert

    let server: Http.Server = Http.createServer();  //Server wird erstellt
    server.addListener("request", handleRequest);   //Dem Server wird ein Listener angehängt, der die Funktion handleRequest aufruft
    server.listen(port);    //Der Server hört auf den port


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Anfrage genemigt!");           //wird im terminal ausgegeben
        console.log(_request.url);                  //Die URL vom Request wird ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8");        //Die Eigenschaften des Headers werden festgelegt mit setHeader
        _response.setHeader("Access-Control-Allow-Origin", "*");      //Zugangsberechtigung wird festgelegt, wer hat Zugriff?
        _response.write(_request.url); //Die Url vom Request wird in die Response geschrieben

        //#endregion Beispielserver code aus der Praktikumsaufgabe 3.1 (FELIX: Kurs "GIS (für MIB und OMB)") 



        //#region Interface (Interface für User, damit dieser angelegt und abgefagt werden kann/ 
        //interface für Login, damit ausgegeben werden kann ob der benutzer schon existiert oder nicht/
        //Interface, damit die Rezpete gespeichert und ausgegebn werden können )

        interface User {
            password: string;
            benutzername: string;
            email: string;
        }


        interface Recepie {
            rezeptname: string;
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
            zubereitungshinweis: string;
        }

        //#endregion Interface


        //#region Variablen (varibalen für Mongo angelegt)

        // let databaseUrl: string = "mongodb+srv://UserTest:usertest123@mariakltb.sfhfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //mondoDB String um mit db zu connecten 
        let databaseUrl: string = "mongodb://localhost:27017";
        let option: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, option); //mongo client angelegt
        let student: Mongo.Collection;

        //#endregion Variablen


        let result: Recepie[]; //ergenbis in User interface form ausgeben lassen


        //#region asynchrone Funktionen 

        async function saveUser(_url: string, _eingabe: User): Promise<string> {
            await mongoClient.connect();        //warten bis die verbindung mit der datenbank besteht 

            let infos: Mongo.Collection = mongoClient.db("Test").collection("Students"); //meine collection wird aufgerufen
            infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
            let serverResponse: string = "Daten wurden gespeichert";        //server antwort sobald die Daten erfolgreich gespeichert wurden 
            return serverResponse;
        }




        async function getRecepie(_url: string): Promise<Recepie[]> {

            await mongoClient.connect(); //wartet bis man mit mongoclient verbunden ist 


            let infos: Mongo.Collection = mongoClient.db("Test").collection("Rezepte"); //meine collection wird aufgerufen
            let cursor: Mongo.Cursor = infos.find(); //Datenbank wird durchsucht 
            result = await cursor.toArray(); //datenbank wird ausgelesen
            return result;          //daten werden zurück gegeben

        }

        async function saveRecepie(_url: string, _eingabe: Recepie): Promise<string> {

            await mongoClient.connect();        //warten bis die verbindung mit der datenbank besteht 

            let infos: Mongo.Collection = mongoClient.db("Test").collection("Rezepte"); //meine collection wird aufgerufen
            infos.insertOne(_eingabe); //eingegebene Daten in DB speichern
            let serverResponse: string = "Rezept wurden gespeichert";    //server antwort sobald die Daten erfolgreich gespeichert wurden 
            return serverResponse;
        }

        async function getFavorite(_url: string): Promise<Recepie[]> {

            await mongoClient.connect();        //warten bis die verbindung mit der datenbank besteht 

            let infos: Mongo.Collection = mongoClient.db("Test").collection("Favoriten"); //meine collection wird aufgerufen
            let cursor: Mongo.Cursor = infos.find(); //Datenbank wird durchsucht 
            result = await cursor.toArray(); //datenbank wird ausgelesen
            return result;          //daten werden zurück gegeben

        }

      
        //#endregion asynchrone Funktionen


        //#region Variablen 

        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let evaluationUser: User = { email: url.query.email + "", benutzername: url.query.benutzername + "", password: url.query.password + "" };
        let evaluationRecepie: Recepie = { rezeptname: url.query.rezeptname + "", zutat1: url.query.Zutat + "", zutat2: url.query.Zutat + "", zutat3: url.query.Zutat + "", zutat4: url.query.Zutat + "", zutat5: url.query.Zutat + "", zutat6: url.query.Zutat + "", zutat7: url.query.Zutat + "", zutat8: url.query.Zutat + "", zutat9: url.query.Zutat + "", zutat10: url.query.Zutat + "", zubereitungshinweis: url.query.Zubereitung + "" };

        //#endregion Variablen


        //#region if-Abfragen (prüft welchen pfad der User nimmt um den richtigen code auszuführen)
        
        if (_request.url) {

            if (url.pathname == "/registration") {
                let userWait: string = await saveUser(databaseUrl, evaluationUser); //wartet bis die function die die Daten speichert fertig ist
                _response.write(userWait); 
            }
            else if (url.pathname == "/userLogin") {

                
                await student.findOne({"username": url.query.username, "password": url.query.password});   //wartet bis die daten aus der datenbank gefunden wurden 
            }


            else if (url.pathname == "/getRecepie") {
                let recepieWait: Recepie[] = await getRecepie(databaseUrl); //wartet bis die function die die daten bekommt fertig ist
                _response.write(JSON.stringify(recepieWait));  //die antwort wird in einen JSON string umgewandelt
            }
            else if (url.pathname == "/getFave") {
                let favWait: Recepie[] = await getFavorite(databaseUrl);        //wartet bis die function die die daten bekommt fertig ist
                _response.write(JSON.stringify(favWait));
            }
            else if (url.pathname == "/safeRecepie") {
                let saveRecepieWait: string = await saveRecepie(databaseUrl, evaluationRecepie);   //wartet bis die function die die daten abgespeichert hat
                _response.write(saveRecepieWait);
            }
           

            //#endregion if-Abfragen


            _response.end(); //beendet die anfrage 


        }
    }
        }
