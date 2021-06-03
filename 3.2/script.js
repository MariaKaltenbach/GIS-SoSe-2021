"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    //mit ID server Antwort in html speichern 
    let serverResponse = document.getElementById("serverAntwort");
    let htmlButton = document.getElementById("htmlButton");
    htmlButton.addEventListener("click", htmlLaden); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt 
    async function htmlLaden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2021.herokuapp.com/"; //herokuapp link einfügen als url variable 
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString(); //herokuapp url mit entsandenem url zusammenfügen
        let response = await fetch(url); //auf url warten
        let responseText = await response.text();
        serverResponse.innerHTML = responseText; //server antwort auf der Html seite aufgeben lassen 
    }
    let jsonButton = document.getElementById("jsonButton");
    jsonButton.addEventListener("click", jsonLaden); //eventlistener wir aktiviert und jsonLaden funktion wird aufgerufen wenn man den jsonButton clickt 
    async function jsonLaden() {
        let formData = new FormData(document.forms[0]); //Form data objekt erzeugen
        let url = "https://gissose2021.herokuapp.com/";
        url += "/json";
        let query = new URLSearchParams(formData); //query variable um mit Query String arebitren zu können 
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        let responseJSON = JSON.parse(responseText); //string in Json umwandeln
        console.log(responseJSON); //umgewndelter string ausgeben lassen
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map