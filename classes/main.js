// ik heb behoefte om een type Ingredient te kunnen maken ... =>


class Ingredient {


    // heeft velden (fields / eigenschappen / properties / attributen)
    // id, name, allergy

    constructor(id, name, allergy) {
        console.log("In de constructor van Ingredient"); // doordat ik new doe
        this.id = id;
        this.name = name;
        this.allergy = allergy;
    }
}


let ingr = new Ingredient(3, "Aardappels", "Gluten");
let asperges = new Ingredient(4, "Asperges", "geen");
let brood = new Ingredient(5, "Brood", "Gluten");

console.log(typeof(ingr));

console.log(ingr.id);
console.log(ingr.name);
console.log(ingr.allergy);

console.log(asperges.name);

console.log(ingr.allergy);

// length of the allergy of ingr
console.log(ingr.allergy.length);

