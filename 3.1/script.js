"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
let form;
var P_3_1Server;
(function (P_3_1Server) {
    let url = "https://gissose2021.herokuapp.com/";
    let senden = document.querySelector("button");
    senden.addEventListener("click", sendData);
    async function sendData(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        await fetch("index.html?" + MediaQueryList.toString());
        console.log(responseText);
        let rueckgabe = document.getElementById("serverausgabe");
        rueckgabe.innerText = responseText;
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map