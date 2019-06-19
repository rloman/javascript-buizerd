class Repository {

    constructor(id) {
        this.id = id;
    }
}


let repo = new Repository(Math.floor(Math.random() * 1000));

module.exports = repo;