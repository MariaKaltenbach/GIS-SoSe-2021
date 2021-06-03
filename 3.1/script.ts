namespace P_3_1Server {
    
    let form: HTMLFormElement;

    let senden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    senden.addEventListener("click", sendData);

    async function sendData(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let url: RequestInfo = "https://gissose2021.herokuapp.com/";
    //let url: string = "https://gissose2021.herokuapp.com/";
        url = url + query.toString();
        console.log(url);
        let response: Response = await fetch (url);
        let responseText: string = await response.text();
        console.log (responseText); 

        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe");
        rueckgabe.innerText = responseText; 
    


    }
    

}