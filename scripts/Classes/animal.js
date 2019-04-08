class Animal {
    constructor(family, species) {
        this.family = family;
        this.species = species;
    }
}

class Tiger extends Animal {
    constructor(family, species) {
        super(family, species);
    }
}