namespace Modulprüfung {

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

    let saveRegistration: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistration.addEventListener("click", userRegistration);                           //eventlistener für Registration

    async function userRegistration(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let serverUrl: string = "https://gissose2021.herokuapp.com";
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/registration" + "?" + query.toString;
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("User wird angelegt.");

    }


    let safeRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", safeRecepies);                           //eventlistener für Registration

    async function safeRecepies(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let serverUrl: string = "https://gissose2021.herokuapp.com";
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRecepie" + "?" + query.toString;
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);

    }



    // /////////////////////////////////////////////////////
    // let compareLogin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    // compareLogin.addEventListener("click", userLogin);                                  //eventlistener für login 

    // async function userLogin(): Promise<void> {

    //     let form: FormData = new FormData(document.forms[0]);
    //     let query: URLSearchParams = new URLSearchParams(<undefined>form);
    //     // let serverUrl: string = "https://gissose2021.herokuapp.com";
    //     let serverUrl: string = "http://localhost:8100";                //server verbinden
    //     serverUrl += "/login" + query.toString;


    //     console.log("User wird eingeloggt.");


    // }




    // let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort");




    // //////////////////////////////////////////////
    // let getRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    // getRecepie.addEventListener("click", getRecepies);

    // async function getRecepies(): Promise<void> {
    //     let daten: FormData = new FormData(document.forms[0]);
    //     let query: URLSearchParams = new URLSearchParams(<any>daten);
    //     let serverUrl: string = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
    //     // url = "http://localhost:8100";
    //     serverUrl += "/getAllRecepies";
    //     serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
    //     let response: Response = await fetch(serverUrl);  //auf url warten
    //     let responseText: string = await response.text(); //json okject erstellen
    //     serverResponse.innerHTML = responseText;

    // }





    // ////////////////////////////////////////////////////////////////////
    // let saveRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    // saveRecepie.addEventListener("click", publishRecepie);                          //eventlistener für Rezept veröffentlichung 

    // //Rezept wird veröffentlicht 
    // async function publishRecepie(): Promise<void> {
    //     // let form: FormData = new FormData(document.forms[0]);
    //     // let query: URLSearchParams = new URLSearchParams(<undefined>form);
    //     console.log("Rezept wurde veröffentlicht.");
    // }
}