"use strict"


demo3();

function assert(b) {
    if(!b) {
        throw new Error();
    }
}

function demo3() {

    // postfix increment and decrement
    let age = 50;
    console.log(age);
    age++; // is hetzelfde als age = age +1;
    console.log(age);
    age--; // is hetzelfde als age = age -1;
    console.log(age);



    // prefix increment and decrement
    age = 50;
    ++age;

    // maar ... wat is dan het verschil
    console.log("Demo postfix increment and print");
    age = 50;
    console.log(age++);
    console.log(age);

    console.log(++age);

    age  = 100;

    let b = ++age; // let op: ++age => age = age +1
    // b => 101
    // age => 101

    age = 100;

    b = age++;
    // b => ??? // 100
    // age => 101
    console.log(b); // => 100
    console.log(age); // => 101
}


function demo2() {
    let string = "123";
    let getal = Number(string);  // convert a string to a Number

    let onzin = Number("Piet");
    console.log(onzin); // NaN
    console.log(onzin+1);
    console.log(true+false);
    console.log(typeof(true+false));
}


function demo() {

    let a = 3;
    console.log(typeof(a))
    assert(typeof(a) == "number");

    let b = String(a);
    console.log(typeof(b))
    assert(typeof(b) == "string");

    let c = Number(b);
    assert(typeof(c) ==  "number");
}