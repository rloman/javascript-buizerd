class Repository {

    constructor() {
        this.content = [];
    }

    save(beer) {
        this.content.push(beer);
    }


    async findAll() {
        return this.content;
    }
}

const repo = new Repository();
module.exports = repo; // dit is gecached!!! dus elke gebruiker
// van deze repository class gebruikt dezelfde instantie