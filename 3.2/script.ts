namespace Aufgabe3_2 {

   //mit ID server Antwort in html speichern 
    let serverResponse: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");  



    let htmlButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlButton");
    htmlButton.addEventListener("click", htmlLaden); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt 


    async function htmlLaden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2021.herokuapp.com/";   //herokuapp link einfügen als url variable 
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<undefined>formData);
        url = url += "?" + query.toString();  //herokuapp url mit entsandenem url zusammenfügen
        let response: Response = await fetch(url);  //auf url warten
        let responseText: string = await response.text();       
        serverResponse.innerHTML = responseText;   //server antwort auf der Html seite aufgeben lassen 
    }


    let jsonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonButton");
    jsonButton.addEventListener("click", jsonLaden); //eventlistener wir aktiviert und jsonLaden funktion wird aufgerufen wenn man den jsonButton clickt 


    async function jsonLaden(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);  //Form data objekt erzeugen
        let url: string = "https://gissose2021.herokuapp.com/";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<undefined>formData); //query variable um mit Query String arebitren zu können 
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
        let responseJSON: JSON = JSON.parse(responseText); //string in Json umwandeln
        console.log(responseJSON);  //umgewndelter string ausgeben lassen

        
    }
}