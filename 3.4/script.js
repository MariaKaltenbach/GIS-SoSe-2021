"use strict";
var Aufgabe3_2;
(function (Aufgabe3_2) {
    //let serverResponse: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverAntwort");
    let datenAnfordern = document.getElementById("getData");
    datenAnfordern.addEventListener("click", getData);
    async function getData() {
        let daten = new FormData(document.forms[0]);
        let url = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        url += "/json";
        let query = new URLSearchParams(daten);
        url = url + "?" + query.toString(); //herokuapp url mit entsandenem url zusammenfügen
        let response = await fetch(url); //auf url warten
        let jsonObjekt = await response.json(); //json okject erstellen
        console.log(jsonObjekt); //json string in console ausgeben lassen 
        //serverResponse.appendChild(response);
    }
    let datenSenden = document.getElementById("sendData");
    datenSenden.addEventListener("click", sendData);
    async function sendData() {
        console.log();
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=script.js.map