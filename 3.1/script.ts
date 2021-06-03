
namespace P_3_1Server {

    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(": " + formData.get("name"));
        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
        
        let query: URLSearchParams = new URLSearchParams(<undefined>formData);
        let _url: RequestInfo = "https://gissose2021.herokuapp.com/";                                    
        _url = _url + "?" + query.toString();
        console.log(_url);
        let response: Response = await fetch(_url);
        let responseText: string = await response.text();
        console.log(responseText);
        let para: HTMLParagraphElement = document.createElement("p");
        para.innerText = _url;
        document.body.appendChild(para);
        
        

    }
    
    document.querySelector("#Abschicken").addEventListener("click", sendData);
    
}