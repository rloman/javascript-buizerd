const controller = require("./controller.js");
const repo = require("./repository.js");

function assert(b, message) {
    if (!b) {
        throw new Error(message);
    }
}

async function getData() {
    return await controller.randomNumber();
}

console.log(getData());
controller.randomNumber().then(function(data) {
    console.log("Francien"+data);
}, function(error) {
    console.log(error);
});

// console.log(repo.randomNumber());

let bird = {
    name: "Vink",
    age: 33
}

controller.add(bird);
controller.add(bird);
controller.add(bird);

controller.findById(2).then(function(result) {
    console.log(result);
    console.log(result.name);
    console.log(result.id);
});
/*

console.log(birdCreated.name);
console.log(typeof(birdCreated));
assert("Promise" === typeof(birdCreated), "no promises" )
assert("Vink" === birdCreated.name, "Vink should be the name of the bird");
*/