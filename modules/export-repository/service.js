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
       return this.repo.add(bird);
    }

    removeById(id) {
       this.repo.removeById(id);
    }

    async findById(id) {
       return await this.repo.findById(id);
    }

}

let service = new Service(repo);

module.exports = service;