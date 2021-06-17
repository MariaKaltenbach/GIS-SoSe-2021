"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let serverResponse = document.getElementById("serverAntwort");
    let url;
    let query;
    async function saveData() {
        let daten = new FormData(document.forms[0]);
        query = new URLSearchParams(daten);
        url = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // url = "http://localhost:8100";
        url += "/safeData" + "?" + query.toString;
        let response = await fetch(url); //auf url warten
        let responseText = await response.text();
        serverResponse.innerHTML = responseText; //server antwort auf der Html seite aufgeben lassen 
        console.log(serverResponse);
    }
    let sendData = document.getElementById("sendData");
    sendData.addEventListener("click", saveData); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt
    async function getData() {
        url += "/getData" + "?";
        let response = await fetch(url); //auf url warten
        let jsonObjekt = await response.json(); //json okject erstellen
        console.log(jsonObjekt); //json string in console ausgeben lassen 
        let serverAusgabe = "";
        for (let i in jsonObjekt) {
            serverAusgabe += "Email:" + jsonObjekt[i].email;
            serverAusgabe += "Benutzername:" + jsonObjekt[i].benutzername;
            serverAusgabe += "Alter:" + jsonObjekt[i].alter;
            serverAusgabe += "Passwort:" + jsonObjekt[i].password;
        }
        serverResponse.innerHTML = serverAusgabe;
    }
    let pullData = document.getElementById("getData");
    pullData.addEventListener("click", getData);
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=script.js.map