
namespace Modulprüfung {

    //#region Variablen 
    let serverUrl: string;                  //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query: URLSearchParams;             // ''
    // let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"
    //#endregion Varibalen



    //#region Daten übertragen (funktion mit FormData, query und der server Url damit man in den folgenden Funktionen nicht die ganze zeit den sleben code hat)
    function transferData(): void {
        let daten: FormData = new FormData(document.forms[0]);  //Formdata um Formular auswerten zu köennen
        query = new URLSearchParams(<any>daten);                //
        // serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        serverUrl = "http://localhost:8100";
    }
    //#endregion Daten Übertragen 

    //#region Eventlistener (durch button im HTML werden diese Funktionen aufgereufen)
    let saveRegistartion: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registration");       //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistartion.addEventListener("click", registration);  //eventlistener wir aktiviert   //eventlistener für Registration


    let compareLogin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");       //variable für eventlistener angelegt und mit id mit html button verknüpft   
    compareLogin.addEventListener("click", login);  //eventlistener wir aktiviert   //eventlistener für Registration
    //#endregion

    //#region asynchrone Funktionen 

    async function registration(): Promise<void> {
        transferData();
        serverUrl += "/registration" + "?" + query.toString();          //zu string umwandeln 
        let response: Response = await fetch(serverUrl);  //auf url warten      //antwort wartet auf die Server url 
        let responseText: string = await response.text(); //json objekt erstellen
        console.log(responseText);

    }



    async function login(): Promise<void> {
        transferData();
        serverUrl += "/userLogin" + "?" + query.toString();          //zu string umwandeln 
        let response: Response = await fetch(serverUrl);  //auf url warten      //antwort wartet auf die Server url 
        let responseText: string = await response.text(); //json object erstellen
        console.log(responseText);

        if (responseText == "false") {
            alert("Benutzer wurde noch nicht Registriert!");
        }
        else {
            window.open("../Modulprüfung/alleRezepte.html");


        }
    }
}
        //#endregion asynchrone Funktionen

