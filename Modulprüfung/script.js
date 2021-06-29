"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    let saveRegistration = document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistration.addEventListener("click", safeRegistration); //eventlistener für Registration
    async function safeRegistration() {
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let serverUrl = "https://gissose2021.herokuapp.com";
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRegistration" + "?" + query.toString();
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("User wird angelegt.");
    }
    let safeRecepie = document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepies); //eventlistener für Registration
    async function saveRecepies() {
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let serverUrl = "https://gissose2021.herokuapp.com";
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRecepie" + "?" + query.toString;
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("Rezept wurde erstellt!");
    }
    /////////////////////////////////////////////////////
    let compareLogin = document.getElementById("login"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    compareLogin.addEventListener("click", userLogin); //eventlistener für login 
    async function userLogin() {
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let serverUrl = "https://gissose2021.herokuapp.com";
        let existUser = await fetch(serverUrl);
        let antwort = await existUser.text();
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/login" + query.toString;
        if (antwort == antwort) {
            alert("Sie wurden erfolgreich eingeloggt.");
        }
        else {
            alert("Benutzer exestiert bereits!");
        }
        console.log("User wird eingeloggt.");
    }
    let serverResponse = document.getElementById("serverAntwort");
    // //////////////////////////////////////////////
    let getRecepie = document.getElementById("getData");
    getRecepie.addEventListener("click", getRecepies);
    async function getRecepies() {
        let daten = new FormData(document.forms[0]);
        let query = new URLSearchParams(daten);
        let serverUrl = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        // let serverUrl: string = "http://localhost:8100";
        serverUrl += "/getAllRecepies";
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText;
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=script.js.map