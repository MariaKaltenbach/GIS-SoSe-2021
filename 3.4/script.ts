namespace Aufgabe3_4 {


    let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort");
    let url: string;
    let query: URLSearchParams;

    async function saveData(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<undefined>daten);
        url = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // url = "http://localhost:8100";
        url += "/safeData" + "?" + query.toString;
        let response: Response = await fetch(url);  //auf url warten
        let responseText: string = await response.text();
        serverResponse.innerHTML = responseText; //server antwort auf der Html seite aufgeben lassen 
        console.log(serverResponse);

    }
    let sendData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendData");
    sendData.addEventListener("click", saveData); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt



    async function getData(): Promise<void> {

        url += "/getData" + "?";
        let response: Response = await fetch(url);  //auf url warten
        let jsonObjekt: User[] = await response.json(); //json okject erstellen
        console.log(jsonObjekt); //json string in console ausgeben lassen 
        let serverAusgabe: string = "";

        for (let i in jsonObjekt) {
            serverAusgabe += "Email:" + jsonObjekt[i].email;
            serverAusgabe += "Benutzername:" + jsonObjekt[i].benutzername;
            serverAusgabe += "Alter:" + jsonObjekt[i].alter;
            serverAusgabe += "Passwort:" + jsonObjekt[i].password;
        }
        serverResponse.innerHTML = serverAusgabe;
    }
    interface User {
        password: string;
        benutzername: string;
        alter: number;
        email: string;
    } // interface für json object

    let pullData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    pullData.addEventListener("click", getData);

}