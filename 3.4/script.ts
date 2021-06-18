namespace Aufgabe3_4 {


    let serverResponse: HTMLDivElement = <HTMLDivElement>document.getElementById("serverAntwort");
    let url: string;
    let query: URLSearchParams;

    async function saveData(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<undefined>daten);
        url = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // url = "http://localhost:8100";
        url += "/safeData" + "?" + query.toString(); 
        await fetch(url);

    }
    let sendData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendData");
    sendData.addEventListener("click", saveData); //eventlistener wir aktiviert und htmlLaden funktion wird aufgerufen wenn man den htmlButton clickt



    async function getData(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        query = new URLSearchParams(<undefined>daten);
        url = "https://gissose2021.herokuapp.com"; //herokuapp link einfügen als url variable 
        // url = "http://localhost:8100";
        url = daten + "/getData";
        let response: Response = await fetch(url);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        serverResponse.innerHTML = responseText;

    }
    

    let pullData: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getData");
    pullData.addEventListener("click", getData);

}