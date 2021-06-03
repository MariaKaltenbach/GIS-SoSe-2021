let form: HTMLFormElement;

namespace P_3_1Server {

let url: string = "https://gissose2021.herokuapp.com/";
//let url: string = "http://localhost:8100";

let senden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
senden.addEventListener("click", sendData);

async function sendData(_event: Event): Promise<void> {
    
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    console.log("Antwort", response);
    alert("Response:" + responseText);
   
 } }