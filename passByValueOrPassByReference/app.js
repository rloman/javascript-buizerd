function assert(b) {
    if(!b) {
        throw new Error();
    }
}



class Bird {

    constructor(age) {
        this.age = age;
    }
}

function foo(bird) {

    bird.age = 45;
}



let birdInstance = new Bird(99);

foo(birdInstance);

assert(birdInstance.age === 45)


let birdJson = {
    age: 99
}

foo(birdJson);

assert(birdJson.age === 45);


// hence we see ... both class and json is passed by reference