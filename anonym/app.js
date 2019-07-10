//sorting an array

let names = ["Mark", "Rowena", "Michiel", "Gijs", "Jeremy", "Sjaco", "Stefan"];

function foo(a, b) {
    if (a === b) {
        return 0;
    }
   else {
       if(a < b) {
           return -1;
       }
       else {
           return 1;
       }
   }
}


console.log(names);
names.sort(foo);
console.log(names);