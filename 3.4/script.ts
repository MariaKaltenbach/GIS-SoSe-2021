namespace Aufgabe3_2 {

    //let serverResponse: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverAntwort");

    interface Datenobjekt {
        vorname: string;
        nachname: string;
        alter: number;
        email: string;
    } // interface für json object

    let datenAnfordern: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    datenAnfordern.addEventListener("click", getData);

    async function getData(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<undefined>daten);
        url = url + "?" + query.toString(); //herokuapp url mit entsandenem url zusammenfügen
        let response: Response = await fetch(url);  //auf url warten
        let jsonObjekt: Datenobjekt = await response.json(); //json okject erstellen
        console.log(jsonObjekt); //json string in console ausgeben lassen 
        //serverResponse.appendChild(response);

    }

    let datenSenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendData");
    datenSenden.addEventListener("click", sendData);
    
    async function sendData(): Promise<void> {
        console.log();

    } 
 }