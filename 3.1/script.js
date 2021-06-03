"use strict";
var P_3_1Server;
(function (P_3_1Server) {
    let form;
    let senden = document.querySelector("button");
    senden.addEventListener("click", sendData);
    async function sendData(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let url = "https://gissose2021.herokuapp.com/";
        //let url: string = "https://gissose2021.herokuapp.com/";
        url = url + query.toString();
        console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        let rueckgabe = document.getElementById("serverausgabe");
        rueckgabe.innerText = responseText;
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map