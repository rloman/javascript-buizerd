const Beer = require('./modules/beer');


const koelkast = require('./modules/repository');
const appelKoelkast = require("./modules/repository");

let b = new Beer("Heineken", "33");

koelkast.save(b);

console.log(koelkast.findAll());

async function print() {
    for (let element of await koelkast.findAll()) {
        console.log(element);
    }
}

(async () => {
    await print();
    
})();





(async () => {
    console.log("En nu de appelkoelkast inhoud ... ");
    for (let element of await appelKoelkast.findAll()) {
        console.log(element);
    }
    console.log("Done");
})();



