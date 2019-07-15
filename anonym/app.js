//sorting an array

let names = ["Mark", "Rowena", "Michiel", "Gijs", "Jeremy", "Sjako", "Stefan"];

function foo(a, b) {
    if (a < b) {
        return -1;
    }
    else {
        if (a > b) {
            return 1;
        }
        else {
            return 0; // equal
        }
    }
}


console.log(names);
names.sort(foo);
console.log(names);

// sort inverse but  als with arrow function
names.sort((a, b) => {
    if (a < b) {
        return 1; // warning: this is a reverse order function!!!
    }
    else {
        if (a > b) {
            return -1; // warning: this is a reverse order function!!!
        }
        else {
            return 0; // equal
        }
    }
})

console.log(names);