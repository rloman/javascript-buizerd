function assert(b) {
    if(!b) {
        throw new Error();
    }
}

class Bike {

    constructor(age) {
        this.age = age;
    }
}

const array = [new Bike("a"), new Bike("b"), new Bike("c")];

const array2 = array.splice();

const array3 = [...array];

assert(array !== array2);

assert(array !== array3);


array[0].age = 13;

assert(array3[0].age === 13); // shallow copy

