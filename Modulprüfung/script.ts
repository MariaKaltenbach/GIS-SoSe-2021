namespace Modulprüfung {


    let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort");


    let saveRegistration: HTMLButtonElement = <HTMLButtonElement>document.getElementById("registration"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    saveRegistration.addEventListener("click", safeRegistration);                           //eventlistener für Registration

    
    let safeRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("veröffentlichen"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    safeRecepie.addEventListener("click", saveRecepies);                           //eventlistener für Registration


    let compareLogin: HTMLButtonElement = <HTMLButtonElement>document.getElementById("login"); //variable für eventlistener angelegt und mit id mit html button verknüpft   
    compareLogin.addEventListener("click", userLogin);                                  //eventlistener für login 


    let getRecepie: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    getRecepie.addEventListener("click", getRecepies);


    async function safeRegistration(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let serverUrl: string = "https://gissose2021.herokuapp.com";
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRegistration";
        serverUrl = serverUrl + "?" + query.toString(); 
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("User wird angelegt.");

    }
   
   



    async function saveRecepies(): Promise<void> {
        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>form);
        let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
        // let serverUrl: string = "http://localhost:8100";                //server verbinden
        serverUrl += "/safeRecepie";
        serverUrl = serverUrl + "?" + query.toString;
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log(responseText);
        console.log("Rezept wurde erstellt!");

    }



    /////////////////////////////////////////////////////
    

    async function userLogin(): Promise<void> {

        let form: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<undefined>form);
        let serverUrl: RequestInfo = "https://gissose2021.herokuapp.com";
        let existUser: Response = await fetch(serverUrl);
        let antwort: string = await existUser.text();
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




    // //////////////////////////////////////////////


    async function getRecepies(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        let serverUrl: string = "https://gissose2021.herokuapp.com"; //herokuapnpm p link einfügen als url variable 
        // let serverUrl: string = "http://localhost:8100";
        serverUrl += "/getAllRecepies";
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        serverUrl = serverUrl + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch(serverUrl);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText;

    }





}