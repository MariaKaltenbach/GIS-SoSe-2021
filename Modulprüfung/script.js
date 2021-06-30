"use strict";
// namespace Modulprüfung {
//     // let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort");
//     let saveRegistration: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
//     saveRegistration.addEventListener("click", safeRegistration);                           //eventlistener für Registration
//     let safeRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
//     safeRecepie.addEventListener("click", saveRecepies);                           //eventlistener für Registration
//     // let compareLogin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
//     // compareLogin.addEventListener("click", userLogin);                                  //eventlistener für login 
//     // let getRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
//     // getRecepie.addEventListener("click", getRecepies);
//     let query: URLSearchParams;
//     let serverUrl: string;
//     let form: FormData;
//     async function safeRegistration(): Promise<void> {
//         form = new FormData(document.forms[0]);
//         query = new URLSearchParams(<any>form);
//         serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
//         //  url = "http://localhost:8100";
//         serverUrl += "/safeData" + "?" + query.toString();
//         let response: Response = await fetch(serverUrl);  //auf url warten
//         let responseText: string = await response.text(); //json okject erstellen
//         console.log(responseText);
//         console.log("User wird angelegt.");
//     }
//     async function saveRecepies(): Promise<void> {
//         form = new FormData(document.forms[0]);
//         query = new URLSearchParams(<any>form);
//         // let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
//         serverUrl = "http://localhost:8100";                //server verbinden
//         serverUrl += "/safeRecepie";
//         serverUrl = serverUrl + "?" + query.toString;
//         let response: Response = await fetch(serverUrl);  //auf url warten
//         let responseText: string = await response.text(); //json okject erstellen
//         console.log(responseText);
//         console.log("Rezept wurde erstellt!");
//     }
//     /////////////////////////////////////////////////////
//     // async function userLogin(): Promise<void> {
//     // //     let form: FormData = new FormData(document.forms[0]);
//     // //     let query: URLSearchParams = new URLSearchParams(<undefined>form);
//     // //     // let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
//     //     let serverUrl: string = "http://localhost:8100";                //server verbinden
//     //     let existUser: Response = await fetch(serverUrl);
//     //     let antwort: string = await existUser.text();
//     //     serverUrl += "/login" + query.toString;
//     //     if (antwort == antwort) {
//     //         alert("Sie wurden erfolgreich eingeloggt.");
//     //     }
//     //     else {
//     //         alert("Benutzer exestiert bereits!");
//     //     }
//     //     console.log("User wird eingeloggt.");
//     // }
//     // //////////////////////////////////////////////
//     // async function getRecepies(): Promise<void> {
//     //     let daten: FormData = new FormData(document.forms[0]);
//     //     // let serverUrl: string = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
//     //     let serverUrl: string = "http://localhost:8100";
//     //     serverUrl += "/getAllRecepies";
//     //     let query: URLSearchParams = new URLSearchParams(<any>daten);
//     //     serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
//     //     let response: Response = await fetch(serverUrl);  //auf url warten
//     //     let responseText: string = await response.text(); //json okject erstellen
//     //     serverResponse.innerHTML = responseText;
//     //     console.log(responseText);
//     // }
// }
var Modulprüfung;
(function (Modulprüfung) {
    let serverResponse = document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"
    let serverUrl; //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query; // ''
    async function registration() {
        let daten = new FormData(document.forms[0]); //Formdata um Formular auswerten zu köennen
        query = new URLSearchParams(daten); //
        // url = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        serverUrl = "http://localhost:8100";
        serverUrl += "/safeData" + "?" + query.toString(); //zu string umwandeln 
        let response = await fetch(serverUrl); //auf url warten      //antwort wartet auf die Server url 
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
    }
    let saveRegistartion = document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistartion.addEventListener("click", registration); //eventlistener wir aktiviert   //eventlistener für Registration
    window.onload = async function getRecepies() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        // url = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        serverUrl = "http://localhost:8100";
        serverUrl += "/getData";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText; //Die server antwort soll innerhalb dem HTML ausgegeben werden 
    };
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=script.js.map