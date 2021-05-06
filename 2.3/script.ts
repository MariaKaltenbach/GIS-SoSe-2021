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

namespace Eisladen {

    //region Interface (Interface für alle drei Auswahlmöglichkeiten angelegt)
    export interface Lebensmittel {

        geschmack: string;
        preis: number;
        name: string;
        farbe: string;
    }



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

        
    //Auswahlmöglichkeiten aus data.js laden 

    //for-Schleife um die Daten aus data.ts ausgeben 

        let waffelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");
        for (let i: number = 0; i < streuselVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = waffelVariation[i].name;
            newOptionElement.setAttribute("value", waffelVariation[i].name);
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

    //for-Schleife um die Daten aus data.ts ausgeben 

        let streuselSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");

        for (let i: number = 0; i < streuselVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = streuselVariation[i].name;
            newOptionElement.setAttribute("value", streuselVariation[i].name);
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


        let eiskugelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");

        for (let i: number = 0; i < eiskugelVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = eiskugelVariation[i].name;
            newOptionElement.setAttribute("value", eiskugelVariation[i].name);
            eiskugelSelect.appendChild(newOptionElement);

        }

        //Eventlistener ändert die Auswahl
        eiskugelSelect.addEventListener("change", eiskugelVariationChanged);
    }


//Eventlistner angelegt

    function waffelVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);

    }


    function eiskugelVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);

    }


    function streuselVariationChanged(_e: Event): void {
        console.log((<HTMLOptionElement>_e.target).value);

    }

}
