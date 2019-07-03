class Repository {

    // field Bird[] // for now

   

    constructor(id) {
        this.id = id;
        this.birds = [];
        this.counter = 0;
    }

    randomNumber() {
        return this.id;
    }

    add(bird) {
        bird.id = ++this.counter;
        this.birds.push(bird);
        console.log("Created bird with id: "+bird.id);

        return bird;
    }

    removeById(id) {
        for(let i = 0;i<this.birds.length;i++) {
            let currentBird = this.birds[i];
            if(currentBird.id === id) {
                this.birds.splice(i);
                return; // done
            }
        }
    }

     async findById(id) {
        let result = this.birds[id-1];

       

        return result;
    }


}


let repo = new Repository(Math.floor(Math.random() * 1000));

module.exports = repo;