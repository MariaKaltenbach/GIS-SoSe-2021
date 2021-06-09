/*namespace P_3_1Server {

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(": " + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        
        let query: URLSearchParams = new URLSearchParams(<undefined>formData);
        let url: RequestInfo = "https://gissose2021.herokuapp.com/";                                    
        url = url + "?" + query.toString();
        console.log(url);
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
        let text: HTMLParagraphElement = document.createElement("p"); //text feld wird erstellt
        text.innerText = url; //in dem erstellten textfeld soll sie url angezeigt werden 
        document.body.appendChild(text); //document body wird der text angehängt
        

    }
    
    document.querySelector("#Abschicken").addEventListener("click", sendData);
    
}*/