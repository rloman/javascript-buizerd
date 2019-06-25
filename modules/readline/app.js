const readline = require("readline");

console.log(typeof(readline)); // object
console.log(readline)

let rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

console.log(typeof(rl)); // object
console.log(rl)

rl.question("Please supply your first name? ", (answer) => {
    console.log("Your firstname is: "+answer);

   rl.close();
});