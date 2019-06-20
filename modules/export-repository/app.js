const controller = require("./controller.js");
const repo = require("./repository.js");

console.log(controller.randomNumber());

console.log(repo.randomNumber());

let bird = {
    name: "Vink",
    age: 33
}

controller.add(bird);
controller.add(bird);
controller.add(bird);
