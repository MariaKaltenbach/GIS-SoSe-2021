console.log("Hallo Welt!");

// Aufgabe 1
/*
function a1(): void {
    let x: string = "Alles";
    console.log();
    func1(x);
    func2(x);
    console.log(x + " " + "Logo!");
}
a1();
function func1(x: string ): void {
    console.log(x + " " + "Klar?");
}
function func2(x: string): void {
    console.log(x + " " + "Gute!");
}
// Aufgabe 2
function a2(): void {
    let i: number = 9;
    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a2();


// Aufgabe 4
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y: string): void {
    y = "Bla";
    console.log(y);
}
function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}
function func3(): void {
    x = "Test";
}
*/
/*
//Aufgabe 5 a
let x: number = 6;
let y: number = 3;

function multiply(x: number, y: number): void {
    let z: number = x * y;
    console.log(z);
}
multiply(x, y);


//Aufgabe 5 b
function max(x: number, y: number): void {
    if (x < y) {
        console.log(y);
    }
    else {
        console.log(x);
    }
}
max(x, y);

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
        var random = Math.floor(Math.random() * 100) + 1;
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
*/

// Aufgabe 6 a
/*
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
 */

// Aufagbe 6 d


function schachbrett(x: number, y: number): String {

    let string: String = "";

    for (let zaehler1: number = 0 ; zaehler1 < x; zaehler1++) {
        for (let zaehler2: number = 0; zaehler2 < y ; zaehler2++) {
            if (zaehler1 % 2 == zaehler2 % 2) {
               string = string + "#"; }
               else (string = string + " ");
        }
        string = string + "\n";
        
    }
    return string;
        
    }
// Aufgabe 6 e

console.log(schachbrett(8, 10));
