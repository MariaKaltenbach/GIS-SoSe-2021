"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    let serverResponse = document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"
    let serverUrl; //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query; // ''
    function transferData() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
    }
    window.onload = async function getRecepie() {
        transferData();
        serverUrl += "/getRecepie";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText; //Die server antwort soll innerhalb dem HTML ausgegeben werden 
    };
    async function saveRecepie() {
        transferData();
        //server verbinden
        serverUrl += "/safeRecepie" + "?" + query.toString;
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("Rezept wurde erstellt!");
    }
    let safeRecepie = document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepie); //eventlistener für Registration
    // async function deleteRecepie(): Promise<void> {
    //     // let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
    //     serverUrl = "http://localhost:8100";
    //     serverUrl += "/deleteRecepie" + "_id";
    // }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=rezept.js.map