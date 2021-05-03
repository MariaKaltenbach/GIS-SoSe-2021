//bekommt den Pfad der Seite auf welcher man sich befindet
let path: string = window.location.pathname;
let page: string = path.split("/").pop();

//Aufgabe 1 
//Canvas auf der index.html seite zeichnen 
if (page == "aufgabe1.html") {

    let buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", makeNew);
    buttons[1].addEventListener("click", reset);
    function makeNew(_e: Event): void {
        let div: HTMLDivElement = document.createElement("div");
        div.style.backgroundColor = "pink";
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

    //Aufgabe 2
namespace Eisladen { 

        //(Interface für alle drei Auswahlmöglichkeiten angelegt)
        export interface Lebensmittel {

            geschmack: string;
            preis: number;
            name: string;
            farbe: string;
        }


        let waffelVariation: Lebensmittel[];
        let eiskugelVariation: Lebensmittel[];
        let streuselVariation: Lebensmittel[];


        //Seiten aufbau


        let waffelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("waffel");
        let eiskugelSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("eiskugel");
        let streuselSelect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("streusel");

        for (let i: number = 0; i < waffelVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = waffelVariation[i].name;
            waffelSelect.appendChild(newOptionElement);

        }

        for (let i: number = 0; i < eiskugelVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = eiskugelVariation[i].name;
            eiskugelSelect.appendChild(newOptionElement);

        }
        for (let i: number = 0; i < streuselVariation.length; i++) {
            let newOptionElement: HTMLOptionElement = <HTMLOptionElement>document.createElement("OPTION");
            newOptionElement.innerText = streuselVariation[i].name;
            streuselSelect.appendChild(newOptionElement);



            //Change Event, damit man die Auswahlmöglichkeiten ändern kann
            waffelSelect.addEventListener("change", waffelVariationChanged);
            eiskugelSelect.addEventListener("change", eiskugelVariationChanged);
            streuselSelect.addEventListener("change", streuselVariationChanged);

            //region Change Events (namen der auswahlmöglichkeiten ausgeben lassen und events damit man diese ändern kann)

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
    }
