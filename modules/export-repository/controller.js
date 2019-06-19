const service = require("./service.js");

class Controller {

    constructor(service) {
        this.service = service;
    }

    randomNumber() {
        return this.service.randomNumber();
    }

}

let controller = new Controller(service);

module.exports = controller;