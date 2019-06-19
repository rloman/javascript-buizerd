class Repository {

    constructor(id) {
        this.id = id;
    }

    randomNumber() {
        return this.id;
    }
}


let repo = new Repository(Math.floor(Math.random() * 1000));

module.exports = repo;