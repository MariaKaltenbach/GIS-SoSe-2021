"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    let serverResponse = document.getElementById("serverAntwort"); //Ausgabe feld im HTMl (Div) verlinkt über die ID:"serverAntwort"
    let serverUrl; //server Url  variable globak angelegt (code verdopplung vermeiden)
    let query; // ''
    async function registration() {
        let daten = new FormData(document.forms[0]); //Formdata um Formular auswerten zu köennen
        query = new URLSearchParams(daten); //
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
        serverUrl += "/safeData" + "?" + query.toString(); //zu string umwandeln 
        let response = await fetch(serverUrl); //auf url warten      //antwort wartet auf die Server url 
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
    }
    let saveRegistartion = document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistartion.addEventListener("click", registration); //eventlistener wir aktiviert   //eventlistener für Registration
    async function saveRecepies() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        let serverUrl = "https://gissose2021.herokuapp.com";
        // serverUrl = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRecepie" + "?" + query.toString;
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("Rezept wurde erstellt!");
    }
    let safeRecepie = document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepies); //eventlistener für Registration
    window.onload = async function getRecepies() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        serverUrl = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        // serverUrl = "http://localhost:8100";
        serverUrl += "/getData";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText; //Die server antwort soll innerhalb dem HTML ausgegeben werden 
    };
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=script.js.map