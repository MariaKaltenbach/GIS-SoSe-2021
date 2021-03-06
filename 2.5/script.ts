//path variable angelegt -> damit ich mit einer if abfrage prüfen kann auf welcher seite ich bin, damit 
//man die komponeneten einzeln auf verschiedenen seiten auswählen kann
let path: string = window.location.pathname;
let page: string = path.split("/").pop();


//Interface für alle drei Auswahlmöglichkeiten angelegt
interface Lebensmittel {

    geschmack: string;
    preis: number;
    name: string;
    farbe: string;
}


//Listen für alles angelegt 
interface LebensmittelListe {

    waffelListe: Lebensmittel[];
    eiskugelListe: Lebensmittel[];
    streuselListe: Lebensmittel[];
}

//Interface für Server Antwort
interface ServerMessage {
    message: string;
    error: string;
}


let waffelVariation: Lebensmittel[];
let eiskugelVariation: Lebensmittel[];
let streuselVariation: Lebensmittel[];


//Canvas variablen angelegt zum zeichnen
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myEiscreme");
let context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

context.lineWidth = 3;


//auf ergebnis Seite Eis ergebnis ausgeben lassen
if (page == "ergebnis.html") {
    eiskugelZeichnen(localStorage.getItem("eiskugelFarbe"), 0, 0);  //Ergebnis der Eiscreme wird ausgegeben
    waffelZeichnen(localStorage.getItem("waffelFarbe"), 0, 0);  //Ergenis der Waffel wird ausgegeben
    streuselZeichnen(localStorage.getItem("streuselFarbe"), 0, 0);  //Ergenbis der Streusel wird ausgegeben


    serverAnfrage("https://gis-communication.herokuapp.com");
}


function seitenAufbau(): void {


    let waffelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");
    let streuselSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");
    let eiskugelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");

    if (page == "streusel.html") {

        //Streusel mit canvas zeichnen lassen
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


        //mit for-Schleife auswahlmöglichkeiten laden lassen
        for (let i: number = 0; i < streuselVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = streuselVariation[i].name;
            newOptionElement.setAttribute("value", streuselVariation[i].farbe);
            streuselSelect.appendChild(newOptionElement);

        }

        //Eventlistener ändert die Auswahl
        streuselSelect.addEventListener("change", streuselVariationChanged);

        //vorherig ausgewählte optionen anzeigen lassen
        eiskugelZeichnen(localStorage.getItem("eiskugelFarbe"), 300, 100);
        waffelZeichnen(localStorage.getItem("waffelFarbe"), 40, 100);

    }


    if (page == "waffel.html") {

        //Waffel mit canvas zeichnen lassen
        context.beginPath();
        context.moveTo(50, 200);
        context.lineTo(150, 600);
        context.lineTo(250, 200);
        context.fill();
        context.closePath();
        context.stroke();



        //mit for-Schleife auswahlmöglichkeiten ausgeben lassen
        for (let i: number = 0; i < waffelVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = waffelVariation[i].name;
            newOptionElement.setAttribute("value", waffelVariation[i].farbe);
            newOptionElement.setAttribute("value1", waffelVariation[i].name);

            waffelSelect.appendChild(newOptionElement);

        }

        //Eventlistener ändert die Auswahl
        waffelSelect.addEventListener("change", waffelVariationChanged);

    }



    if (page == "eiskugel.html") {

        //Eiskugel mit canvas zeichnen lasseen
        context.beginPath();
        context.arc(150, 130, 120, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.stroke();


        //mit for-Schleife auswahlmöglichkeiten ausgeben lassen
        for (let i: number = 0; i < eiskugelVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = eiskugelVariation[i].name;
            newOptionElement.setAttribute("value", eiskugelVariation[i].farbe);
            eiskugelSelect.appendChild(newOptionElement);

        }
        //Eventlistener ändert die Auswahl
        eiskugelSelect.addEventListener("change", eiskugelVariationChanged);

        //vorherig ausgewählte option anzeigen lassen
        waffelZeichnen(localStorage.getItem("waffelFarbe"), 250, -250);

    }


    //Change Events (farbe der auswahlmöglichkeiten ausgeben lassen und events damit man diese ändern kann)
    function waffelVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("waffelFarbe", (<HTMLOptionElement>_e.target).value);
        waffelNeuZeichnen();
    }

    function eiskugelVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        localStorage.setItem("eiskugelFarbe", (<HTMLOptionElement>_e.target).value);
        eiskugelNeuZeichnen();

    }
    function streuselVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);
        console.log(name);
        localStorage.setItem("streuselFarbe", (<HTMLOptionElement>_e.target).value);

        streuselNeuZeichnen();
    }



    //canvas auf den jeweiligen seiten in bestimmter position zeichnen lassen und farbe speichern
    function waffelNeuZeichnen(): void {

        waffelZeichnen(localStorage.getItem("waffelFarbe"), 0, 0);

    }

    function eiskugelNeuZeichnen(): void {

        eiskugelZeichnen(localStorage.getItem("eiskugelFarbe"), 0, 0);

    }

    function streuselNeuZeichnen(): void {

        streuselZeichnen(localStorage.getItem("streuselFarbe"), 0, 0);

    }
}
//Eiskugel zeichnen Ergebnisseite
// x und y Koordinaten um die Position auf den auswahlseiten verändern zu können
//color String damit sich die Farbe bei der auswahl ändert
function eiskugelZeichnen(_colorString: string, _x: number, _y: number): void {

    context.beginPath();
    context.fillStyle = _colorString;
    context.strokeStyle = _colorString;
    context.arc(150 + _x, 130 + _y, 120, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.stroke();

}



// Waffel zeichnen Ergebnisseite
function waffelZeichnen(_colorString: string, _x: number, _y: number): void {

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
function streuselZeichnen(_colorString: string, _x: number, _y: number): void {
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


//Daten aus der Json laden
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


//Server anfrage 
async function serverAnfrage(_url: string): Promise<void> {

    //broswerCacheData geändert zu localStorage
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
