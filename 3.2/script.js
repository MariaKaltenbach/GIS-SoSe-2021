"use strict";
let form;
var P_3_1Server;
(function (P_3_1Server) {
    let url = "https://gissose2021.herokuapp.com/";
    //let url: string = "http://localhost:8100";
    let senden = document.querySelector("button");
    senden.addEventListener("click", sendData);
    async function sendData(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log("Antwort", response);
        alert("Response:" + responseText);
    }
})(P_3_1Server || (P_3_1Server = {}));
//# sourceMappingURL=script.js.map