namespace Modulprüfung {

    let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"


    let serverUrl: string;                  //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query: URLSearchParams;             // ''

    function transferData(): void {
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<any>daten);
        // serverUrl = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        serverUrl = "http://localhost:8100";
    }
    window.onload = async function getRecepie(): Promise<void> {           //window.onload -> damit die rezepte direkt bei betreten der seite angezeigt werden 
        transferData();
        serverUrl += "/getRecepie";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen

        serverResponse.innerHTML = responseText;            //Die server antwort soll innerhalb dem HTML ausgegeben werden 

    };


    async function saveRecepie(): Promise<void> {
        transferData();
        //server verbinden
        serverUrl += "/safeRecepie" + "?" + query.toString;
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("Rezept wurde erstellt!");

    }

    let safeRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepie);                           //eventlistener für Registration

    // async function deleteRecepie(): Promise<void> {

    //     // let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
    //     serverUrl = "http://localhost:8100";
    //     serverUrl += "/deleteRecepie" + "_id";

    // }

}