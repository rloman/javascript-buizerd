function * getList(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            console.log("Yielding: "+i)
            yield i;
        }
    }
}

function * squares(start, end) {
    for(let i = start;i<=end;i++) {
        console.log("Yielding a square");
        yield Math.pow(i,2); // i ** 2
    }
}

for(let n of getList(1,15)){
    console.log(n);
}

for(let n of squares(1,15)) {
    console.log(n)
}