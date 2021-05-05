
//path variable angelegt -> damit ich mit einer if abfrage prüfen kann auf welcher seite ich bin, damit 
//man die komponeneten einzeln auf verschiedenen seiten auswählen kann
let path: string = window.location.pathname;
let page: string = path.split("/").pop();


// Aufgabe 1 woche 3
if (page == "aufgabe1.html") {
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
}

// Aufagabe 2 und 3 

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


//mit Canvas zeichnen

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

context.lineWidth = 3;

if (page == "Waffel.html") {

    context.beginPath();
    context.moveTo(50, 200);
    context.lineTo(150, 600);
    context.lineTo(250, 200);
    context.fill();
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

//for-Schleife um die Daten ausgeben zu lassen

for (let i: number = 0; i < eiskugelVariation.length; i++) {
    let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
    newOptionElement.innerText = eiskugelVariation[i].name;
    eiskugel.appendChild(newOptionElement);
}



for (let i: number = 0; i < waffelVariation.length; i++) {
    let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
    newOptionElement.innerText = waffelVariation[i].name;
    waffel.appendChild(newOptionElement);
}



for (let i: number = 0; i < streuselVariation.length; i++) {
    let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
    newOptionElement.innerText = streuselVariation[i].name;
    streusel.appendChild(newOptionElement);
}


waffel.addEventListener("change", waffelVariationChanged);

function waffelVariationChanged(_e: Event): void {
    console.log((<HTMLOptionElement>_e.target).value);
}


eiskugel.addEventListener("change", eiskugelVariationChanged);

function eiskugelVariationChanged(_e: Event): void {
    console.log((<HTMLOptionElement>_e.target).value);
}


streusel.addEventListener("change", streuselVariationChanged);

function streuselVariationChanged(_e: Event): void {
    console.log((<HTMLOptionElement>_e.target).value);
}
