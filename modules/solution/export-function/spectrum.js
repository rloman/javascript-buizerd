class Spectrum {

    constructor(id, name, numbers) {
        this.id = id;
        this.name = name;
        this.numbers = numbers;
    }
}

let spectrum = new Spectrum(3, "Spectrum te Breda"+new Date(), 9);


module.exports = spectrum;