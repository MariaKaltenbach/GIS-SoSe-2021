"use strict";
//path variable angelegt -> damit ich mit einer if abfrage prüfen kann auf welcher seite ich bin, damit 
//man die komponeneten einzeln auf verschiedenen seiten auswählen kann
let path = window.location.pathname;
let page = path.split("/").pop();
// Aufgabe 1 woche 3
if (page == "aufgabe1.html") {
    let buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", makeNew);
    buttons[1].addEventListener("click", reset);
    function makeNew(_e) {
        let div = document.createElement("div");
        div.style.backgroundColor = "black";
        div.style.height = "50px";
        div.style.width = "50px";
        div.style.marginLeft = (Math.random() * 200).toString() + "px";
        document.getElementById("fillThis")?.appendChild(div);
    }
    function reset(_e) {
        let parent = document.getElementById("fillThis");
        parent.innerHTML = "";
    }
}
// Aufagabe 2 und 3 
var Eisladen;
(function (Eisladen) {
    //mit Canvas zeichnen
    let canvas = document.getElementById("myEiscreme");
    let context = canvas.getContext("2d");
    context.lineWidth = 3;
    if (page == "Waffel.html") {
        context.beginPath();
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.fill();
        context.closePath();
        context.stroke();
        //Auswahlmöglichkeiten aus data.js laden 
        //for-Schleife um die Daten asu data.ts ausgeben 
        let waffelSelect = document.getElementById("waffel");
        for (let i = 0; i < Eisladen.waffelVariation.length; i++) {
            let newOptionElement = document.createElement("OPTION");
            newOptionElement.innerText = Eisladen.waffelVariation[i].name;
            newOptionElement.setAttribute("value", Eisladen.waffelVariation[i].name);
            waffelSelect.appendChild(newOptionElement);
        }
        //Eventlistener ändert die Auswahl
        waffelSelect.addEventListener("change", waffelVariationChanged);
    }
    if (page == "Streusel.html") {
        context.beginPath();
        context.moveTo(80, 140);
        context.lineTo(100, 150);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(170, 140);
        context.lineTo(150, 150);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(230, 100);
        context.lineTo(210, 110);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(180, 60);
        context.lineTo(190, 80);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(130, 100);
        context.lineTo(100, 100);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(100, 60);
        context.lineTo(130, 40);
        context.closePath();
        context.stroke();
        context.beginPath();
        context.moveTo(190, 160);
        context.lineTo(210, 180);
        context.closePath();
        context.stroke();
        //Auswahlmöglichkeiten aus data.js laden 
        //for-Schleife um die Daten asu data.ts ausgeben 
        let streuselSelect = document.getElementById("streusel");
        for (let i = 0; i < Eisladen.streuselVariation.length; i++) {
            let newOptionElement = document.createElement("OPTION");
            newOptionElement.innerText = Eisladen.streuselVariation[i].name;
            newOptionElement.setAttribute("value", Eisladen.streuselVariation[i].name);
            streuselSelect.appendChild(newOptionElement);
        }
        //Eventlistener ändert die Auswahl
        streuselSelect.addEventListener("change", streuselVariationChanged);
    }
    if (page == "Eiskugel.html") {
        context.beginPath();
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();
        //Auswahlmöglichkeiten aus data.js laden 
        //for-Schleife um die Daten asu data.ts ausgeben 
        let eiskugelSelect = document.getElementById("eiskugel");
        for (let i = 0; i < Eisladen.eiskugelVariation.length; i++) {
            let newOptionElement = document.createElement("OPTION");
            newOptionElement.innerText = Eisladen.eiskugelVariation[i].name;
            newOptionElement.setAttribute("value", Eisladen.eiskugelVariation[i].name);
            eiskugelSelect.appendChild(newOptionElement);
        }
        //Eventlistener ändert die Auswahl
        eiskugelSelect.addEventListener("change", eiskugelVariationChanged);
    }
    //Eventlistner angelegt
    function waffelVariationChanged(_e) {
        console.log(_e.target.value);
    }
    function eiskugelVariationChanged(_e) {
        console.log(_e.target.value);
    }
    function streuselVariationChanged(_e) {
        console.log(_e.target.value);
    }
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=script.js.map