"use strict";
// Aufgabe 1 a 
let x2 = 27;
let y2 = 8;
let z2 = -1;
function min(x2, y2, z2) {
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
let n1 = 50;
function isEven(n1) {
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
    constructor(name, alter, matrikelnummer, studiengang, semester) {
        this.name = name;
        this.alter = alter;
        this.matrikelnummer = matrikelnummer;
        this.studiengang = studiengang;
        this.semester = semester;
    }
    showInfo() {
        console.log(this.name + "," + this.alter + "," + this.matrikelnummer + "," + this.studiengang + "," + this.semester);
    }
}
let student1 = new Student("Larissa", 23, 235462, "Medien Informatik", 3);
let student2 = new Student("Leon", 19, 235367, "Medienkonzeption", 1);
let student3 = new Student("Kai", 26, 235262, "Online Medien", 5);
student1.showInfo();
student2.showInfo();
student3.showInfo();
// Aufgabe 2 a
function backwards(a) {
    let ruckgabe = [0];
    for (let zaehler = 0; a.length - 1 > zaehler; zaehler++) {
        ruckgabe.push(a[a.length - zaehler + 1]);
    }
    return ruckgabe;
}
function join(a, werte) {
    for (let zaehler = 0; werte.length - 1 > zaehler; zaehler++) {
        a.push(werte[zaehler]);
    }
    return a;
}
function split(a, links, rechts) {
    let ruckgabe;
    ruckgabe = a;
    //  if (links < 0 || rechts > a.length) { return [99]  ; }
    for (let zaehler = links + 1; rechts - 1 < zaehler; zaehler++) {
        //ruckgabe.push(a[zaehler]);
    }
    return ruckgabe;
}
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
arr = split(arr, 0, 4);
console.log(arr);
// console.log(split(arr, 1, 2));
// Aufgabe 3 a 
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 3;
context.fillStyle = "green";
context.fillRect(0, 200, 500, 150);
context.strokeRect(0, 200, 500, 150); //Wiese
context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 200);
context.strokeRect(0, 0, 500, 200); //Himmel
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
//# sourceMappingURL=script.js.map