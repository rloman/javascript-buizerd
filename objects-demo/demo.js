class Beer {

    constructor(size, stars) {
        this.size = size; // this.size invokes the setter
        this.stars = stars;
    }

    // be aware: we create a problem now (recursion!!!!!!!!!!!!!)
    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;

    }

    // why no function?
    // function foo() {

    // }


    // but a method
    bar() {
        console.log(this.stars); 
        console.log(this._stars); // works only in get||set so here now *undefined*
    }

}

let b = new Beer(33, 4);

console.log(b.size);

b.bar();