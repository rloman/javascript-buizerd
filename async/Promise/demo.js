"use strict";

function foo(a,b) {

    if(b !== 0) {
        return Promise.resolve(a/b); // blij
    }
    else {
        return Promise.reject(-1); // chips
    }
}

function ok(data) {
    console.log("Dat ging goed!!! Tjakkaa!!! en het resultaat is: "+data);
}


function fail(data) {
    console.log("Fout, chips!!!!!!!!!!! en het resultaat is: "+data);
}

let promise = foo(4,2);
promise.then(ok, fail);

console.log("Deel 1 gedaan!");

promise = foo(3,0);
promise.then(ok, fail);

console.log("Deel 2 gedaan!");


// anonieme functie
promise = foo(8,2);
promise.then(function(data) {
    console.log("Data in een anonieme functie: "+data);
}, function(fout) {
    console.log("Voutje bedankt!"+fout);
});

promise = foo(8,0);
promise.then(function(data) {
    console.log("Data in een anonieme functie: "+data);
}, function(fout) {
    console.log("Voutje bedankt!"+fout);
});


promise = foo(6,2);
promise.then((data) => {
    console.log("Data in een arrow function: "+data)
}, (data) => {
    console.log("Voutje bedankt in een arrow function: "+data);
});

promise = foo(6,0);
promise.then((data) => {
    console.log("Data in een arrow function: "+data)
}, (data) => {
    console.log("Voutje bedankt in een arrow function: "+data);
});

//JAVASCRIPT JARGON: IIFE
// Immediately Invoked Function Expression
(async () => {
    let result = await foo(4,3);
    console.log(result);
})();

(async function() {
    let result = await foo(4,3);
    console.log(result);
})();
