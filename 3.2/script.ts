namespace Aufgabe3_2 {

    interface Datenobjekt { 
        vorname: string;
        nachname: string;
        alter: number;
        email: string;
    } // interface für json object
    let serverResponse: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverAntwort"); 

    let htmlButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("htmlButton");
    htmlButton.addEventListener("click", htmlLaden); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt

    async function htmlLaden(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]); 
        //let url: RequestInfo = "hhttps://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        let url: RequestInfo = "http://localhost:8100"; 
        url += "/html"; 
        let query: URLSearchParams = new URLSearchParams(<undefined>daten);
        url = url + "?" + query.toString();  //herokuapp url mit entsandenem url zusammenfügen
        let response: Response = await fetch(url);  //auf url warten
        let responseText: string = await response.text(); 
        serverResponse.innerHTML = responseText; //server antwort auf der Html seite aufgeben lassen 
          
    }
    let jsonButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("jsonButton");
    jsonButton.addEventListener("click", jsonLaden);
   

    async function jsonLaden(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
       // let url: RequestInfo = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        let url: RequestInfo = "http://localhost:8100"; 
        url += "/json"; 
        let query: URLSearchParams = new URLSearchParams(<undefined>daten);
        url = url + "?" + query.toString(); //herokuapp url mit entsandenem url zusammenfügen
        let response: Response = await fetch(url);  //auf url warten
        let jsonObjekt: Datenobjekt = await response.json(); //json okject erstellen
        console.log(jsonObjekt); //json string in console ausgeben lassen 
    }



    
}