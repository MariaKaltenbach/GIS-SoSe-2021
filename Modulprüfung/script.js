"use strict";
var Modulprüfung;
(function (Modulprüfung) {
    /* interface User {
         mail: string;
         benutzername: string;
         password: string;
     }*/
    /* interface Rezept {
         gramm: string;
         zutat: string;
         zubereitungsschritte: string;
     }
 */
    let saveRegistration = document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistration.addEventListener("click", userRegistration); //eventlistener für Registration
    async function userRegistration() {
        let form = new FormData(document.forms[0]);
        let query = new URLSearchParams(form);
        let serverUrl = "https://gissose2021.herokuapp.com";
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/registration" + query.toString;
        let response = await fetch(serverUrl); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("User wird angelegt.");
    }
    let compareLogin = document.getElementById("login"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    compareLogin.addEventListener("click", userLogin); //eventlistener für login 
    async function userLogin() {
        // let form: FormData = new FormData(document.forms[0]);
        // let query: URLSearchParams = new URLSearchParams(<undefined>form);
        // serverUrl = "https://gissose2021.herokuapp.com";
        let serverUrl = "http://localhost:8100"; //server verbinden
        serverUrl += "/login";
        console.log("User wird eingeloggt.");
    }
    let saveRecepie = document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRecepie.addEventListener("click", publishRecepie); //eventlistener für Rezept veröffentlichung 
    async function publishRecepie() {
        // let form: FormData = new FormData(document.forms[0]);
        // let query: URLSearchParams = new URLSearchParams(<undefined>form);
        console.log("Rezept wurde veröffentlicht.");
    }
})(Modulprüfung || (Modulprüfung = {}));
//# sourceMappingURL=script.js.map