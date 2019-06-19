const repo = module.require("./repository.js");

class Service {

    constructor(repo) {
        this.repo = repo;
    }

    randomNumber() {
        return this.repo.randomNumber();
    }

}

let service = new Service(repo);

module.exports = service;