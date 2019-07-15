let Beer = require('./modules/beer');

let koelkast = require('./modules/repository');


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
    console.log("Done");
})();


