namespace Modulprüfung {

    let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"

    
    let serverUrl: string;                  //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query: URLSearchParams;             // ''

    window.onload = async function getRecepies(): Promise<void> {           //window.onload -> damit die rezepte direkt bei betreten der seite angezeigt werden 
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<any>daten);
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
        serverUrl += "/getRecepies";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText;            //Die server antwort soll innerhalb dem HTML ausgegeben werden 

    };


    async function saveRecepies(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<any>daten);
        serverUrl = "https://gissose2021.herokuapp.com";
        // serverUrl = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRecepies" + "?" + query.toString;
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("Rezept wurde erstellt!");

    }

    let safeRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepies);                           //eventlistener für Registration

    // async function deleteRecepie(): Promise<void> {

    //     // let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
    //     serverUrl = "http://localhost:8100";
    //     serverUrl += "/deleteRecepie" + "_id";
        
    // }

}