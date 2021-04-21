console.log("Hallo Welt!");

// Aufgabe 1
//Konsolen Ausgabe "Alles Klar?" und "Alles Logo!" //alle varibalen namen sind möglich (ausgenommen bereits verwendete namen)
function a1(): void {
    let x: string = "Alles";
    /*debugger;*/
    console.log(x);
    func1(x);
    func2(x);
    console.log(x + " " + "Logo!");
}
a1();
function func1(x: string): void {
    console.log(x + " " + "Klar?");
}
function func2(x: string): void {
    console.log(x + " " + "Gute!");
}
//debugger -> in Zeile 3 wird die variable x ausgegeben "Alles" danach wird function finc1 aufgerufen mit ausgabe "Alles Klar?" zurück in function a1 wird function func 2 aufgarufen und "Alles Gute!" ausgegeben wieder zurück in a1 wird dann "Alles Logo!" ausgegeben.
// Aufgabe 2
//zähler variable i wird auf 9 gesetzte, solagne i größer als 0 soll auf der konsole die zähler variable ausgegeben werdrn also i und dann um 1 gesenkt werden, dann wird i überschrieben mit der niedrigeren zhal, bis die bedingung i größer als 0 also i = 0 nicht mher erfüllt ist. Es wird 9, 8, 7, 6, 5, 4, 3, 2, 1 ausgegeben 
function a2(): void {
    let i: number = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();


// Aufgabe 4
//konsolen ausgabe = "Hallo" dann gehen wir in die function1 rein. Konsolen ausgabe = "Bla" -> konsolen ausgabe = "Hallo", dann Function2 "Blubb" und function3 x wird überschrieben und es wird "Test" ausgegeben
let x: string = "Hallo";
console.log(x);
function1(x);
console.log(x);
function2();
function3();
console.log(x);
function function1(y: string): void {
    y = "Bla";
    console.log(y);
}
function function2(): void {
    let x: string = "Blubb";
    console.log(x);
}
function function3(): void {
    x = "Test";
}
//globale Variablen können von jeder funktion aufgerufen und benutzt werden 
//Lokale variablen könnne nur innerhalb einer funktion verwendet werden leben zwischen zwei geschweiften klammern
//Übergabeparameter werden global angelegt und können bestimmten funktionen übergeben werden
//normale variablen können eine zahl oder string impelemtiere und anlegen funktionen können ausgeführt werden 

//Aufgabe 5 a
let x1: number = 6;
let y1: number = 3;

function multiply(x1: number, y1: number): void {
    let z1: number = x1 * y1;
    console.log(z1);
}
multiply(x1, y1);


//Aufgabe 5 b
function max(x1: number, y1: number): void {
    if (x1 < y1) {
        console.log(y1);
    }
    else {
        console.log(x1);
    }
}
max(x1, y1);

//Aufgabe 5 c
function schleife(): void {
    let i: number = 1;
    let ergebnis: number = 0;
    while (i <= 100) {
        ergebnis += i;
        i += 1;
    }
    console.log(ergebnis);
}
schleife();

//Aufgabe 5 d
function getRandom(): void {
    for (let i: number = 0; i < 10; i++) {
        var random: number = Math.floor(Math.random() * 100) + 1;
        console.log(random);
    }
}
getRandom();

//Aufgabe 5 e
let n: number = 8;
let e: string;
function factorial(n: number): void {
    if (n < 1) {
        console.log(1);
    } else {
        do {
            e = n + "*";
            console.log(e);
            break;
        } while (n > 1);
    }
}
factorial(n);

//Aufgabe 5 f
function leapyears(): void {
    for (let schaltjahr: number = 1900; schaltjahr < 2021; schaltjahr++) {
        if (schaltjahr % 4 == 0 && schaltjahr % 100 != 0) {
            console.log(schaltjahr);
        }
        else if (schaltjahr % 400 == 0) {
            console.log(schaltjahr);
        }
    }
}
leapyears();


// Aufgabe 6 a

function string(): void {
    let s: string = "";
    while (s.length < 7) {
        s = s + "#";
        console.log(s);
    }
}
string();
// Aufageb 6 b
function fizz(): void {
    for (let i: number = 0; i < 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizz();
// Aufgabe 6 c
function fizzBuzz(): void {
    for (let i: number = 0; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz();


// Aufagbe 6 d

function schachbrett(x: number, y: number): String {

    let string: String = "";

    for (let zaehler1: number = 0; zaehler1 < x; zaehler1++) {
        for (let zaehler2: number = 0; zaehler2 < y; zaehler2++) {
            if (zaehler1 % 2 == zaehler2 % 2) {
                string = string + "#";
            }
            else (string = string + " ");
        }
        string = string + "\n";

    }
    return string;

}
// Aufgabe 6 e

console.log(schachbrett(8, 10));

