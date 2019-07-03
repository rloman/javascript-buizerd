function * squares(start, end) {
    for(let i = start;i<=end;i++) {
        console.log("Yielding a square");
        yield Math.pow(i,2); // i ** 2
    }
}

function print() {
    for(let n of squares(1,15)) {
        console.log(n)
    }
}


setTimeout(print, 2500);


