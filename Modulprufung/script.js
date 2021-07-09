"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    //#region Variablen 
    let serverUrl; //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query; // ''
    // let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"
    //#endregion Varibalen
    //#region Daten übertragen (funktion mit FormData, query und der server Url damit man in den folgenden Funktionen nicht die ganze zeit den sleben code hat)
    function transferData() {
        let daten = new FormData(document.forms[0]); //Formdata um Formular auswerten zu köennen
        query = new URLSearchParams(daten); //
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
    }
    //#endregion Daten Übertragen 
    //#region Eventlistener (durch button im HTML werden diese Funktionen aufgereufen)
    let saveRegistartion = document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistartion.addEventListener("click", registration); //eventlistener wir aktiviert   //eventlistener für Registration
    let loginOut = document.getElementById("logout"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    loginOut.addEventListener("click", logout); //eventlistener wir aktiviert   //eventlistener für Registration
    let compareLogin = document.getElementById("login"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    compareLogin.addEventListener("click", login); //eventlistener wir aktiviert   //eventlistener für Registration
    //#endregion
    function logout() {
        localStorage.clear();
    }
    //#region asynchrone Funktionen 
    async function registration() {
        transferData();
        serverUrl += "/registration" + "?" + query.toString(); //zu string umwandeln 
        let response = await fetch(serverUrl); //auf url warten      //antwort wartet auf die Server url 
        let responseText = await response.text(); //json objekt erstellen
        console.log(responseText);
        alert("Sie haben sich erfolgreich registriert, melden Sie sich un an!");
    }
    async function login() {
        transferData();
        serverUrl += "/userLogin" + "?" + query.toString(); //zu string umwandeln 
        let response = await fetch(serverUrl); //auf url warten      //antwort wartet auf die Server url 
        let responseText = await response.text(); //json object erstellen
        console.log(responseText);
        if (responseText != "") {
            localStorage.setItem("Benutzer", responseText);
            window.open("../Modulprufung/alleRezepte.html");
        }
        else {
            alert("Benutzername oder Passwort falsch!");
        }
    }
})(Modulprüfung || (Modulprüfung = {}));
//#endregion asynchrone Funktionen
//# sourceMappingURL=script.js.map