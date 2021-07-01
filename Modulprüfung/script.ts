
namespace Modulprüfung {


    let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"
    let serverUrl: string;                  //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query: URLSearchParams;             // ''


    async function registration(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);  //Formdata um Formular auswerten zu köennen
        query = new URLSearchParams(<any>daten);                //
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
        serverUrl += "/safeData" + "?" + query.toString();          //zu string umwandeln 
        let response: Response = await fetch(serverUrl);  //auf url warten      //antwort wartet auf die Server url 
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
    }
    let saveRegistartion: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registration");       //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistartion.addEventListener("click", registration);  //eventlistener wir aktiviert   //eventlistener für Registration




    async function saveRecepies(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<any>daten);
        let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
        // serverUrl = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRecepie" + "?" + query.toString;
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("Rezept wurde erstellt!");

    }

    let safeRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepies);                           //eventlistener für Registration


    window.onload = async function getRecepies(): Promise<void> {           //window.onload -> damit die rezepte direkt bei betreten der seite angezeigt werden 
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<any>daten);
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
        serverUrl += "/getData";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText;            //Die server antwort soll innerhalb dem HTML ausgegeben werden 

    };

}