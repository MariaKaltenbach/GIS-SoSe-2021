"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    let serverResponse = document.getElementById("serverAntwort");
    let htmlButton = document.getElementById("htmlButton");
    htmlButton.addEventListener("click", htmlLaden); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt
    async function htmlLaden() {
        let daten = new FormData(document.forms[0]);
        //let url: RequestInfo = "hhttps://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        let url = "http://localhost:8100";
        url += "/html";
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString(); //herokuapp url mit entsandenem url zusammenfügen
        let response = await fetch(url); //auf url warten
        let responseText = await response.text();
        serverResponse.innerHTML = responseText; //server antwort auf der Html seite aufgeben lassen 
    }
    let jsonButton = document.getElementById("jsonButton");
    jsonButton.addEventListener("click", jsonLaden);
    async function jsonLaden() {
        let daten = new FormData(document.forms[0]);
        // let url: RequestInfo = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        let url = "http://localhost:8100";
        url += "/json";
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString(); //herokuapp url mit entsandenem url zusammenfügen
        let response = await fetch(url); //auf url warten
        let jsonObjekt = await response.json(); //json okject erstellen
        console.log(jsonObjekt); //json string in console ausgeben lassen 
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map