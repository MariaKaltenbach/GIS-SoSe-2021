"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
var P_3_1Server;
(function (P_3_1Server) {
    let url = "https://gissose2021.herokuapp.com/";
    //let url: string = "http://localhost:8100";
    let form;
    let senden = document.querySelector("button");
    senden.addEventListener("click", sendData);
    async function sendData(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        await fetch("index.html?" + MediaQueryList.toString());
        alert(responseText);
        console.log(query);
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map