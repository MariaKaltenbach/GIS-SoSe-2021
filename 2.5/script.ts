/*//region Interface (Interface für alle drei Auswahlmöglichkeiten angelegt)
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

//(Interface für Server Antwort)
interface ServerMessage {
    message: string;
    error: string;
}
//regionend

let waffelVariation: Lebensmittel[];
let eiskugelVariation: Lebensmittel[];
let streuselVariation: Lebensmittel[];

//bekommt den Pfad der Seite auf welcher man sich befindet
let path: string = window.location.pathname;
let page: string = path.split("/").pop();


//region Canvas
//mit Canvas zeichnen

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

context.lineWidth = 3;



//Eiskugel zeichnen Ergebnisseite
// x und y Koordinaten um die Position auf dern index.html seite verändern zu können
//color String damit sich die Farbe bei der auswahl ändert
function icecream(_colorString: string, _x: number, _y: number): void {

    context.beginPath();
    context.fillStyle = _colorString;
    context.strokeStyle = _colorString;
    context.arc(150 + _x, 130 + _y, 120, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.stroke();

}



// Waffel zeichnen Ergebnisseite
function cone(_colorString: string, _x: number, _y: number): void {

    context.beginPath();
    context.fillStyle = _colorString;
    context.strokeStyle = _colorString;
    context.moveTo(50 + _x, 200 + _y);
    context.lineTo(150 + _x, 600 + _y);
    context.lineTo(250 + _x, 200 + _y);
    context.closePath();
    context.fill();
    context.stroke();

}


//streusel zeichnen Ergebnisseite
function sprinkles(_colorString: string, _x: number, _y: number): void {
    context.beginPath();
    context.fillStyle = _colorString;
    context.strokeStyle = _colorString;
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

//regionend



//region: Abfrage (welche Seite geöffnet ist)
//Canvas explizit auf der Ergebnis seite zeichnen
if (page == "Ergebnis.html") {

    icecream(localStorage.getItem("eiskugelFarbe"), 0, 0);  //Ergebnis der Eiscreme wird ausgegeben
    cone(localStorage.getItem("waffelFarbe"), 0, 0);  //Ergenis der Eiscreme wird ausgegeben
    sprinkles(localStorage.getItem("streuselFarbe"), 0, 0);  //Ergenbis der eiscreme wird ausgegeben

    serverAnfrage("https://gis-communication.herokuapp.com");
}

//Canvas auf der index.html seite zeichnen 
if (page == "index.html") {

    neuZeichnen();

}

//regionend

//region Seiten aufbau(function welche die Auswahlmöglichkeiten mit for schleifen aus der json läd)
function seitenAufbau(): void {

    let waffelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");
    let eiskugelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");
    let streuselSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");

    for (let i: number = 0; i < waffelVariation.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = waffelVariation[i].name;
        newOptionElement.setAttribute("value", waffelVariation[i].farbe);
        waffelSelect.appendChild(newOptionElement);

    }

    for (let i: number = 0; i < eiskugelVariation.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = eiskugelVariation[i].name;
        newOptionElement.setAttribute("value", eiskugelVariation[i].farbe);
        eiskugelSelect.appendChild(newOptionElement);

    }
    for (let i: number = 0; i < streuselVariation.length; i++) {
        let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
        newOptionElement.innerText = streuselVariation[i].name;
        newOptionElement.setAttribute("value", streuselVariation[i].farbe);
        streuselSelect.appendChild(newOptionElement);

    }
    //Change Event, damit man die Auswahlmöglichkeiten ändern kann
    waffelSelect.addEventListener("change", waffelVariationChanged);
    eiskugelSelect.addEventListener("change", eiskugelVariationChanged);
    streuselSelect.addEventListener("change", streuselVariationChanged);


    //region Change Events (namen der auswahlmöglichkeiten ausgeben lassen und events damit man diese ändern kann)

    function waffelVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("waffelFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();
    }

    function eiskugelVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("eiskugelFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();

    }
    function streuselVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("streuselFarbe", (<HTMLOptionElement>_e.target).value);
        neuZeichnen();

    }

    //endregion

    if (localStorage.getItem("waffelFarbe") == null) {

        localStorage.setItem("waffelFarbe", waffelVariation[0].farbe);

    }
    waffelSelect.value = localStorage.getItem("waffelFarbe");

    if (localStorage.getItem("eiskugelFarbe") == null) {

        localStorage.setItem("eiskugelFarbe", eiskugelVariation[0].farbe);

    }
    eiskugelSelect.value = localStorage.getItem("eiskugelFarbe");


    if (localStorage.getItem("streuselFarbe") == null) {

        localStorage.setItem("streuselFarbe", streuselVariation[0].farbe);

    }
    streuselSelect.value = localStorage.getItem("streuselFarbe");


}

//endregion

//region Canvas
//Funktion damit die farbe sich ändert sobalt man etwas auswählt
//Canvas auf der index.html zeichnen, mit addierten werten um die position zu ändern
function neuZeichnen(): void {

    icecream(localStorage.getItem("eiskugelFarbe"), 300, 100);
    cone(localStorage.getItem("waffelFarbe"), 40, 100);
    sprinkles(localStorage.getItem("streuselFarbe"), 0, 0);

}

//regionend


//reghion JSON (Daten aus der Json laden)
jsonLaden("data.json");

async function jsonLaden(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let data: LebensmittelListe = await response.json();
    waffelVariation = data.waffelListe;
    eiskugelVariation = data.eiskugelListe;
    streuselVariation = data.streuselListe;

    //erst laden wenn die Seite aufgabeut ist
    seitenAufbau();
}

//regionend

//region Server anfrage 
async function serverAnfrage(_url: string): Promise<void> {

    let query: URLSearchParams = new URLSearchParams(localStorage);
    _url = _url + "?" + query.toString();
    let response: Response = await fetch(_url);
    let serverNachricht: ServerMessage = await response.json();
    let serverAntwort: HTMLElement = document.getElementById("serverAntwort");
    let text: HTMLParagraphElement = document.createElement("p");

    if (serverNachricht.message !== undefined) {
        text.innerText = serverNachricht.message;
    }

    if (serverNachricht.error !== undefined) {
        text.setAttribute("style", "color:red");
        text.innerText = serverNachricht.error;
    }
    serverAntwort.appendChild(text);
}
    //regionend
*/