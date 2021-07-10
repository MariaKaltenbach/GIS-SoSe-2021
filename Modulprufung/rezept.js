"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    //#region variablen (für server)
    let serverResponse = document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"
    let serverUrl; //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query;
    //#endregion variablen 
    //#region Daten übertragen (funktion mit FormData, query und der server Url damit man in den folgenden Funktionen nicht die ganze zeit den selben code hat)
    function transferData() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
    }
    //#endregion Daten Übertragen 
    //#region window.onload (function die direkt angesprochen wird wenn man die website betritt)
    window.onload = async function getRecepie() {
        transferData();
        serverUrl += "/getRecepie";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //auf server antwort warten
        serverResponse.innerHTML = responseText; //und die server antwort soll innerhalb dem HTML ausgegeben werden 
    };
    //#endregion window.onload
    //#region asynchrone Funktionen 
    async function saveRecepie() {
        transferData();
        serverUrl += "/safeRecepie" + "?" + query.toString();
        let response = await fetch(serverUrl);
        let responseText = await response.text();
        console.log(responseText);
        console.log("Rezept wurde erstellt!");
    }
    //#endregion asynchrone Funktionen 
    //#region Eventlistener (durch button im HTML werden diese Funktionen aufgerufen)
    let safeRecepie = document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepie); //eventlistener für die Rezept veröffentlichung
    //#endregion Eventlistener 
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=rezept.js.map