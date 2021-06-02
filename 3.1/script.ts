let form: HTMLFormElement;
export namespace P_3_1Server {

    let url: string = "https://gissose2021.herokuapp.com/";

    let senden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    senden.addEventListener("click", sendData);

    async function sendData(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        await fetch("index.html?" + MediaQueryList.toString());
        console.log(responseText);
        
    
        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); 
        rueckgabe.innerText = responseText; 
    
    }

}