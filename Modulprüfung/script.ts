
namespace Modulprüfung {


    let serverUrl: string;                  //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query: URLSearchParams;             // ''
    let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"

    interface Login {

        massage: string;
        error: string;
    }

    async function registration(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);  //Formdata um Formular auswerten zu köennen
        query = new URLSearchParams(<any>daten);                //
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
        serverUrl += "/registration" + "?" + query.toString();          //zu string umwandeln 
        let response: Response = await fetch(serverUrl);  //auf url warten      //antwort wartet auf die Server url 
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
    }
    let saveRegistartion: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registration");       //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistartion.addEventListener("click", registration);  //eventlistener wir aktiviert   //eventlistener für Registration

    
    let compareLogin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login");       //variable für eventlistener angelegt und mit id mit html button verknüpft   
    compareLogin.addEventListener("click", login);  //eventlistener wir aktiviert   //eventlistener für Registration

    async function login(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);  //Formdata um Formular auswerten zu köennen
        query = new URLSearchParams(<any>daten);                //
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
        serverUrl += "/login" + "?" + query.toString();          //zu string umwandeln 
        let response: Response = await fetch(serverUrl);  //auf url warten      //antwort wartet auf die Server url 
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
        let loginAntwort: Login = JSON.parse(responseText);

        if (loginAntwort.error != undefined) serverResponse.innerHTML = loginAntwort.error;
        if (loginAntwort.massage != undefined) {
            window.open("../alleRezepte.html");
            serverResponse.innerHTML = loginAntwort.massage;


        }



    }
}