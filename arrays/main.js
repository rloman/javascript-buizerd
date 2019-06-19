let fruits = ["Appel", "Peer", "Banaan", "perzik"];




console.log(fruits[0]);
console.log(fruits[3]);

// add some to the end
fruits.push("Druif"); // same as fruits[4]= "Druif";

console.log(fruits[4]);

console.log(fruits.shift());
console.log(fruits[0]);

for(let fruit of fruits) {
    console.log("Fruitsoort: "+fruit);
}

for(let i = 0;i<fruits.length;i++) {
    console.log("Fruitsoort:"+i+") "+fruits[i]);
}

console.log(typeof(fruits));

let a = 3;
let b = a;
b =2
console.log(a);
console.log(b);