// Aufgabe 1 a 
//html Seiten trennen -> code für zwei verschiedene seiten in einer script.ts datei
let path: string = window.location.pathname;
let page: string = path.split("/").pop();


let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");


context.lineWidth = 3;

if (page == "index.html") {

    let x2: number = 27;
    let y2: number = 8;
    let z2: number = -1;
    function min(x2: number, y2: number, z2: number): void {
        if (x2 < y2 && x1 < z2) {
            console.log(x1);
        }

        else if (y2 < z2 && y1 < x2) {
            console.log(y1);
        }
        else if (z2 < x2 && z2 < y2) {
            console.log(z2);
        }
    }
    min(x2, y2, z2);


    // Aufgabe 1 b 
    let n1: number = 50;
    function isEven(n1: number): void {
        if (0 % n1 == 0) {
            console.log(true);
        }
        else if (1 % n1 == 0) {
            isEven(n1 - 2);
            console.log(false);
        }

    }
    isEven(n1);

    // Aufgabe 1 c 

    class Student {

        name: string;
        studiengang: string;
        semester: number;
        matrikelnummer: number;
        alter: number;


        constructor(name: string, alter: number, matrikelnummer: number, studiengang: string, semester: number) {
            this.name = name;
            this.alter = alter;
            this.matrikelnummer = matrikelnummer;
            this.studiengang = studiengang;
            this.semester = semester;

        }
        showInfo(): void {


            console.log(this.name + "," + this.alter + "," + this.matrikelnummer + "," + this.studiengang + "," + this.semester);

        }
    }
    let student1: Student = new Student("Larissa", 23, 235462, "Medien Informatik", 3);
    let student2: Student = new Student("Leon", 19, 235367, "Medienkonzeption", 1);
    let student3: Student = new Student("Kai", 26, 235262, "Online Medien", 5);


    student1.showInfo();
    student2.showInfo();
    student3.showInfo();



    // Aufgabe 2 a


    function backwards(a: number[]): number[] {
        let ruckgabe: number[] = [0];

        for (let zaehler: number = 0; a.length - 1 > zaehler; zaehler++) {

            ruckgabe.push(a[a.length - zaehler + 1]);

        }

        return ruckgabe;

    }


    function join(a: number[], werte: number[]): number[] {


        for (let zaehler: number = 0; werte.length - 1 > zaehler; zaehler++) {

            a.push(werte[zaehler]);

        }

        return a;

    }


    function split(a: number[], links: number, rechts: number): number[] {


        let ruckgabe: number[];

        ruckgabe = a;
        //  if (links < 0 || rechts > a.length) { return [99]  ; }

        for (let zaehler: number = links + 1; rechts - 1 < zaehler; zaehler++) {

            //ruckgabe.push(a[zaehler]);

        }

        return ruckgabe;
    }

    let array: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    let arrayBack: number[] = backwards(array);
    console.log(array);
    console.log(arrayBack);
    console.log(join(array, [15, 9001, -440]));

    array = split(array, 0, 4);
    console.log(array);
    // console.log(split(arr, 1, 2));


    // Aufgabe 3 a 


    context.fillStyle = "green";
    context.fillRect(0, 200, 500, 150);
    context.strokeRect(0, 200, 500, 150); //Wiese


    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 500, 200);
    context.strokeRect(0, 0, 500, 200);  //Himmel
    //cloud
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(130, 100, 130, 150, 230, 150);
    context.bezierCurveTo(250, 180, 320, 180, 340, 150);
    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
    context.bezierCurveTo(430, 40, 370, 30, 340, 50);
    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
    context.bezierCurveTo(200, 5, 150, 20, 170, 80);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = "lightgrey";
    context.stroke();
    //wall
    context.strokeRect(75, 140, 150, 110);
    context.clearRect(75, 140, 150, 110);
    // Door
    context.fillStyle = "#000";
    context.fillRect(130, 190, 40, 60);
    //tree
    context.fillStyle = "brown";
    context.fillRect(340, 200, 30, 150);
    // Roof
    context.beginPath();
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.strokeStyle = "grey";
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
    context.stroke();
    //baumkrone
    context.beginPath();
    context.moveTo(200, 120);
    context.bezierCurveTo(170, 140, 170, 190, 270, 190);
    context.bezierCurveTo(360, 250, 390, 250, 410, 210);
    context.bezierCurveTo(480, 210, 490, 190, 460, 170);
    context.bezierCurveTo(500, 110, 440, 100, 410, 120);
    context.bezierCurveTo(390, 75, 320, 90, 320, 120);
    context.bezierCurveTo(270, 75, 210, 90, 240, 150);
    context.closePath();
    context.lineWidth = 5;
    context.fillStyle = "green";
    context.fill();
    context.strokeStyle = "lightgreen";
    context.stroke();

}

if (page == "aufgabe3.html") {
    //Aufgabe 3 b

    interface Rechteck {
        breite: number;
        höhe: number;
        x: number;
        y: number;
    }


    //Aufgabe 3 c
    context.fillStyle = "lightblue";


    let rechteck1: Rechteck = { breite: 30, höhe: 40, x: 300, y: 300 };

    context.strokeRect(rechteck1.x, rechteck1.y, rechteck1.breite, rechteck1.höhe);

    context.fillRect(rechteck1.x, rechteck1.y, rechteck1.breite, rechteck1.höhe);

    function createRect(): Rechteck {

        let rechteck1: Rechteck = { breite: Math.random() * 50 + 50, höhe: Math.random() * 50 + 50, x: Math.random() * 50 + 50, y: Math.random() * 50 + 50 };

        return rechteck1;
    }

    drawRect(createRect());

    //Aufgabe 3 d

    function drawRect(_rechteck1: Rechteck): void {


        context.strokeRect(_rechteck1.x, _rechteck1.y, _rechteck1.breite, _rechteck1.höhe);

        context.fillRect(_rechteck1.x, _rechteck1.y, _rechteck1.breite, _rechteck1.höhe);

    }

    //Aufgabe 3 e

    let rechteck: Rechteck[] = [];
    rechteck.push(createRect());
    rechteck.push(createRect());
    rechteck.push(createRect());


    for (let i: number = 0; i < rechteck.length; i++) {
        drawRect(rechteck[i]);
    }
}