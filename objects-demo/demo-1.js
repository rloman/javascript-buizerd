class Wine {

    // constructor: Explain!!!!!!!1
    constructor(name, stars) {

        // sets the *fields*
        this.name = name;
        this.stars = stars;
    }

     // why no function?
    // function foo() {

    // }


    // but a method
    bar() {
        console.log(this.stars); 
    }

}

let wine = new Wine("Red Chill", 4);

console.log(wine.stars);

wine.bar();