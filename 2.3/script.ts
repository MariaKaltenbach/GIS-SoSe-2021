
//region Interface (Interface für alle drei Auswahlmöglichkeiten angelegt)
interface Lebensmittel {

    geschmack: string;
    preis: number;
    name: string;
    farbe: string;
}
//(Listen für alles angelegt)
interface LebensmittelListe {

    waffelListe: Lebensmittel[];
    eiskugelListe: Lebensmittel[];
    streuselListe: Lebensmittel[];
}



let waffelVariation: Lebensmittel[];
let eiskugelVariation: Lebensmittel[];
let streuselVariation: Lebensmittel[];

let path: string = window.location.pathname;
let page: string = path.split("/").pop();



//region Canvas
//mit Canvas zeichnen

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

context.lineWidth = 3;

if (page == "Waffel.html") {

    context.beginPath();
    context.moveTo(50, 200);
    context.lineTo(150, 600);
    context.lineTo(250, 200);
    context.closePath();
    context.stroke();


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
}


if (page == "Eiskugel.html") {

    context.beginPath();
    context.arc(150, 130, 120, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.stroke();
}

//Auswahlmöglichkeiten aus data.js laden 

let waffel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");
let eiskugel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");
let streusel: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");


for (let i: number = 0; i < waffelVariation.length; i++) {
    let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
    newOptionElement.innerText = waffelVariation[i].name;
    newOptionElement.setAttribute("value", waffelVariation[i].name);
    waffel.appendChild(newOptionElement);
}



for (let i: number = 0; i < eiskugelVariation.length; i++) {
    let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
    newOptionElement.innerText = eiskugelVariation[i].name;
    newOptionElement.setAttribute("value", eiskugelVariation[i].name + "_valueTag");
    eiskugel.appendChild(newOptionElement);
}




for (let i: number = 0; i < streuselVariation.length; i++) {
    let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
    newOptionElement.innerText = streuselVariation[i].name;
    newOptionElement.setAttribute("value", streuselVariation[i].name + "_valueTag");
    streusel.appendChild(newOptionElement);
}


waffel.addEventListener("change", waffelVariationenChanged);

function waffelVariationenChanged(_e: Event): void {
    console.log((<HTMLOptionElement>_e.target).value);
}


eiskugel.addEventListener("change", eiskugelVariationenChanged);

function eiskugelVariationenChanged(_e: Event): void {
    console.log((<HTMLOptionElement>_e.target).value);
}


streusel.addEventListener("change", streuselVariationenChanged);

function streuselVariationenChanged(_e: Event): void {
    console.log((<HTMLOptionElement>_e.target).value);
}
