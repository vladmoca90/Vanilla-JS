class Animal {
    constructor(family, species) {
        this.family = family;
        this.species = species;
    }
}

class Tiger extends Animal {
    get animalType() {
        return `${this.family} and ${this.species}`;
    }
}

const tiger = new Tiger('Felidae', 'Panthera tigris');

console.log(tiger.animalType);
// Felidae and Panthera tigris