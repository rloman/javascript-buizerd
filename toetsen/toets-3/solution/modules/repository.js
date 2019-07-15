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

module.exports = new Repository();