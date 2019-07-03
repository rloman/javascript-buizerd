const service = require("./service.js");

class Controller {

    constructor(service) {
        this.service = service;
    }

    async randomNumber() {
        return this.service.randomNumber();
    }

    add(bird) {
        return this.service.add(bird);
         
     }
 
     removeById(id) {
        this.service.removeById(id);
     }

     async findById(id) {
         return await this.service.findById(id);
     }
 

}

let controller = new Controller(service);

module.exports = controller;