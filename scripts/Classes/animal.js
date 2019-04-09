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

    get animalType() {
        return this.family + ' - ' + this.species;
    }
}

let tiger = new Tiger('Felidae', 'Panthera tigris');

console.log(tiger.animalType);