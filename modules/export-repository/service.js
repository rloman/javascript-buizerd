const repo = module.require("./repository.js");

class Service {

    constructor(repo) {
        this.repo = repo;
    }

    // for demo (to get all people started without )
    randomNumber() {
        return this.repo.randomNumber();
    }

    add(bird) {
       this.repo.add(bird);
    }

    removeById(id) {
       this.repo.removeById(id);
    }

}

let service = new Service(repo);

module.exports = service;