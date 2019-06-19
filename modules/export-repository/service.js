const repo = module.require("./repository.js");

class Service {

    constructor(repo) {
        this.repo = repo;
    }

}

let service = new Service(repo);

module.exports = service;