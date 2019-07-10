"use strict";

function divide(a,b) {
    if(b !== 0) {
        return a/b;
    }
    else {
        throw new Error("Delen door nul is flauwekul!");
    }
}


function tryToDivide() {
    let c = divide(4,2);
    console.log(c);

    // open a file
    
    try {
        let d = divide(3,0);
        console.log(d);

        return;
    
    
    }
    catch(e) { // e is hier de gevangen error die uit de function divide wordt gegooid
        console.log("In handler van de try, dus in het catch block!!!");

        return;
    }

    finally {
        // close the file (or so)
        console.log("Close the file ... ");
    }
}

tryToDivide();


console.log("Einde programma bereikt!");
