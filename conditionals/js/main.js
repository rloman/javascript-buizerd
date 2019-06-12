"use strict"

let aantalDagen = geefAantalDagenVoorMaand(8);

console.log("Het aantal dagen is: "+aantalDagen);

function demo2() {
    let age = 60;

    let labelForCategorie = (age > 60) ? "Older" : "Pretty young";

    let bullshit = (age > 50) ? (age > 60) ? "Old" : "Older" : "Young";
}

function geefAantalDagenVoorMaand(maandNummer) { // 1..12

    let result;

    switch (maandNummer) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = 31;
            break;

        case 2:
            result = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result = 30;
            break;

        default:
            console.log("Geen geldig maandnummer!!!");
            break;
    }

    console.log("Einde van de switch case");

    return result;

}


function demo() {

    let year = prompt("wat is uw leeftijd", 13);

    if (year == 2015) {
        console.log("Het jaar van de rozen!")
    }
    else {
        if (year == 2016) {
            console.log("Year van Ronald Koeman");
        }
        else {
            console.log("Ander jaartal");
        }
    }
}