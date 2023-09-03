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
        return this.family + ' ' + 'and' + ' ' + this.species;
    }
}

const tiger = new Tiger('Felidae', 'Panthera onca');

console.log(tiger.animalType); //Output will be 'Felidae and Panthere onca'