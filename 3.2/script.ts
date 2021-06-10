namespace Aufgabe3_2 {


    let serverResponse: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverAntwort");


    async function htmlLaden(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        //let url: RequestInfo = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        //let url: RequestInfo = "https://gis-example.herokuapp.com"; //herokuapp link einfügen als url variable 

        let url: RequestInfo = "http://localhost:8100"; 
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString();  //herokuapp url mit entsandenem url zusammenfügen
        let response: Response = await fetch(url);  //auf url warten
        let responseText: string = await response.text();
        serverResponse.innerHTML = responseText; //server antwort auf der Html seite aufgeben lassen 

    }
    let htmlButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlButton");
    htmlButton.addEventListener("click", htmlLaden); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt



    async function jsonLaden(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        //let url: RequestInfo = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        //let url: RequestInfo = "https://gis-example.herokuapp.com"; //herokuapp link einfügen als url variable 

        let url: RequestInfo = "http://localhost:8100"; 
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString(); //herokuapp url mit entsandenem url zusammenfügen
        let response: Response = await fetch(url);  //auf url warten
        let jsonObjekt: Datenobjekt = await response.json(); //json okject erstellen
        console.log(jsonObjekt); //json string in console ausgeben lassen 
    }

    let jsonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonButton");
    jsonButton.addEventListener("click", jsonLaden);

    interface Datenobjekt {
        vorname: string;
        nachname: string;
        alter: number;
        email: string;
    } // interface für json object

}