"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    //#region Variablen 
    let serverUrl; //server Url variable global angelegt (code verdopplung vermeiden)
    let query; // ''
    //#endregion Varibalen
    //#region Daten übertragen (funktion mit FormData, query und der server Url damit man in den folgenden Funktionen nicht die ganze zeit den selben code hat)
    function transferData() {
        let data = new FormData(document.forms[0]); //Formdata um Formular auswerten zu können
        query = new URLSearchParams(data);
        // serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        serverUrl = "http://localhost:8100";
    }
    //#endregion Daten Übertragen 
    //#region Eventlistener (durch button im HTML werden diese Funktionen aufgerufen)
    let saveRegister = document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegister.addEventListener("click", registration); //eventlistener wir aktiviert   //eventlistener für Registration
    let compareLogin = document.getElementById("userLogin"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    compareLogin.addEventListener("click", login); //eventlistener wir aktiviert   //eventlistener für Login
    //#endregion Eventlistener
    //#region asynchrone Funktionen 
    async function registration() {
        transferData(); //benötigte Daten aufrufen
        serverUrl += "/registration" + "?" + query.toString(); //zu string umwandeln 
        let response = await fetch(serverUrl); //auf url warten      //mit fetch wird eine anfrage gestellt und es wird ein Promise zurück gegeben
        let responseText = await response.text(); //antwort des servers wird angelegt und wartet auf das Promise und speichert es in einen text
        console.log(responseText);
        alert("Sie wurden erfolgreich Registriert, melden Sie sich nun an!");
    }
    async function login() {
        transferData();
        serverUrl += "/userLogin" + "?" + query.toString();
        let response = await fetch(serverUrl);
        let responseText = await response.text();
        console.log(responseText);
        if (responseText == "true") { //wenn die Server antwort stimmt 
            window.open("../Modulprufung/alleRezepte.html"); //soll die Startseite geöffnet werden/user wird eingeloggt
        }
        else {
            alert("Benutzername oder Passwort falsch!"); //wenn die antwort falsch ist wird ein alert angezeigt
        }
    }
})(Modulprüfung || (Modulprüfung = {}));
//#endregion asynchrone Funktionen
//# sourceMappingURL=script.js.map