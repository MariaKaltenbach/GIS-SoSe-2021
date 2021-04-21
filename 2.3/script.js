"use strict";
//Aufgabe 1 
/*
let buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
buttons[0].addEventListener("click", makeNew);
buttons[1].addEventListener("click", reset);
function makeNew(_e: Event): void {
    let div: HTMLDivElement = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.height = "50px";
    div.style.width = "50px";
    div.style.marginLeft = (Math.random() * 200).toString() + "px";
    document.getElementById("fillThis")?.appendChild(div);
}
function reset(_e: Event): void {
let parent: HTMLDivElement = <HTMLDivElement>document.getElementById("fillThis");
parent.innerHTML = "";
}
*/
//Aufgabe 2
var Eisladen;
(function (Eisladen) {
    let waffelVariation;
    let eiskugelVariation;
    let streuselVariation;
    //region Seiten aufbau
    let waffelSelect = document.getElementById("waffel");
    let eiskugelSelect = document.getElementById("eiskugel");
    let streuselSelect = document.getElementById("streusel");
    for (let i = 0; i < waffelVariation.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = waffelVariation[i].name;
        waffelSelect.appendChild(newOptionElement);
    }
    for (let i = 0; i < eiskugelVariation.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = eiskugelVariation[i].name;
        eiskugelSelect.appendChild(newOptionElement);
    }
    for (let i = 0; i < streuselVariation.length; i++) {
        let newOptionElement = document.createElement("OPTION");
        newOptionElement.innerText = streuselVariation[i].name;
        streuselSelect.appendChild(newOptionElement);
        //Change Event, damit man die Auswahlmöglichkeiten ändern kann
        waffelSelect.addEventListener("change", waffelVariationChanged);
        eiskugelSelect.addEventListener("change", eiskugelVariationChanged);
        streuselSelect.addEventListener("change", streuselVariationChanged);
        //region Change Events (namen der auswahlmöglichkeiten ausgeben lassen und events damit man diese ändern kann)
        function waffelVariationChanged(_e) {
            console.log(_e.target.value);
        }
        function eiskugelVariationChanged(_e) {
            console.log(_e.target.value);
        }
        function streuselVariationChanged(_e) {
            console.log(_e.target.value);
        }
    }
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=script.js.map