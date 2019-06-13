class Beer {

    constructor(size, stars) {
        this._size = size;
        this._stars = stars;
    }

    // be aware: we create a problem now (recursion!!!!!!!!!!!!!)
    get size() {
        return this._size;
    }

    set size(size) {
        this._size = size;

    }


}

let b = new Beer(33, 4);

console.log(b.size);