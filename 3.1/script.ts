let form: HTMLFormElement;
export namespace P_3_1Server {

    let url: string = "https://gissose2021.herokuapp.com/";
    //let url: string = "http://localhost:8100";


    async function sendData(_event: Event): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<undefined>formData);
        let response: Response = await fetch(url + "?" + query.toString());
        let responseText: string = await response.text();
        await fetch("index.html?" + MediaQueryList.toString());
        console.log(query);

        let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("serverAntwort");
        rueckgabe.innerText = responseText;

    }


    let senden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    senden.addEventListener("click", sendData);
}