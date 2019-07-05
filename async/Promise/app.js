"use strict";
// this function returns a promise of
// input: even the Promise.resolve (success);
// input: odd then Promise.fail (fail)
function doetIeHetOfDoetIeHetNiet(n) {
    if(n %2 == 0) {
        let result = Promise.resolve(n**2);

        return result;
    }
    else {
        let result = Promise.reject("That is NOT AN EVEN Number, so fail!!!!!!!!");

        return result;
    }
}


let resultOfNiet = doetIeHetOfDoetIeHetNiet(4);
resultOfNiet.then((data) => {
    console.log(data);
}, (error) => {
    console.log("Fail!!!"+error);
});


resultOfNiet = doetIeHetOfDoetIeHetNiet(3);
resultOfNiet.then((data) => {
    console.log(data);
}, (error) => {
    console.log("Fail!!!"+error);
});



// more hard
 resultOfNiet = doetIeHetOfDoetIeHetNiet(4);
resultOfNiet.then((data) => {
    console.log(data);

    return data;
}, (error) => {
    console.log("Fail!!!"+error);
}).then((data) => {
    console.log("Step 2: "+data);
    return data ** 2;
}, (error) => {
    console.log("Fail 2: "+error);
}).then((data) => {
    console.log(data);

    return data ** 2;

}, (error) => {
    console.log("Fout");
});

// Promised enough???

// Again ... learning here is a verb (werkwoord) dus we moeten het gewoon vaker doen.
