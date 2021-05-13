"use strict";
var Eisladen;
(function (Eisladen) {
    Eisladen.eiskugelVariation = [
        { geschmack: "Schokolade", preis: 1.20, name: "Schokoeis", farbe: "brown" },
        { geschmack: "Vanille", preis: 1.20, name: "Vanilleeis", farbe: "yellow" },
        { geschmack: "Erdbeere", preis: 1.20, name: "Erdbeereis", farbe: "pink" }
    ];
    let myEiskugel = Eisladen.eiskugelVariation;
    let myJSON1 = JSON.stringify(myEiskugel);
    console.log(myJSON1);
    Eisladen.waffelVariation = [
        { geschmack: "Schokolade", preis: 0.70, name: "Schokowaffel", farbe: "black" },
        { geschmack: "Vanille", preis: 0.70, name: "Vanillewaffel", farbe: "beige" },
        { geschmack: "Haselnuss", preis: 0.70, name: "Haselnusswaffel", farbe: "brown" }
    ];
    let myWaffel = Eisladen.waffelVariation;
    let myJSON = JSON.stringify(myWaffel);
    console.log(myJSON);
    Eisladen.streuselVariation = [
        { geschmack: "Zucker", preis: 0.20, name: "Zuckerstreusel", farbe: "pink" },
        { geschmack: "Schokolade", preis: 0.20, name: "Schokostreusel", farbe: "brown" },
        { geschmack: "Weißeschokolade", preis: 0.20, name: "Weißeschokostreusel", farbe: "white" }
    ];
    let myStreusel = Eisladen.streuselVariation;
    let myJSON2 = JSON.stringify(myStreusel);
    console.log(myJSON2);
})(Eisladen || (Eisladen = {}));
//# sourceMappingURL=data.js.map