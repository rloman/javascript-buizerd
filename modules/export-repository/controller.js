const service = require("./service.js");

class Controller {

    constructor(service) {
        this.service = service;
    }

    randomNumber() {
        return this.service.randomNumber();
    }

    add(bird) {
        this.service.add(bird);
         
     }
 
     removeById(id) {
        this.service.removeById(id);
     }
 

}

let controller = new Controller(service);

module.exports = controller;