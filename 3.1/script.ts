
export namespace P_3_1Server {

 let url: string = "https://gissose2021.herokuapp.com/";
 //let url: string = "http://localhost:8100";
 let form: HTMLFormElement;

 let senden: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
 senden.addEventListener("click", sendData);

 async function sendData(_event: Event): Promise<void> {
     let formData: FormData = new FormData(form);
     let query: URLSearchParams = new URLSearchParams(<undefined>formData);
     let response: Response = await fetch(url + "?" + query.toString());
     let responseText: String = await response.text();
     await fetch("index.html?" + MediaQueryList.toString());
     alert(responseText);
     console.log(query);

 }

 }