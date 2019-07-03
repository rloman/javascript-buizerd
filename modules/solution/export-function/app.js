const foo = require("./module.js");
const spectrum = require("./spectrum.js");
const andereSpectrum = require("./spectrum.js");

const readline = require("readline");

let readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fourtyTwo = foo();

console.log(fourtyTwo);

console.log(spectrum.name);
console.log(andereSpectrum.name);

readlineInterface.question("What is your first name? ", function(answer) {
    console.log("Your answer is: "+answer);

    readlineInterface.close();
});


