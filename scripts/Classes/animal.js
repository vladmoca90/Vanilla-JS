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
        return this.family + ' ' +  'and' + ' ' +  this.species;
    }

    set animalType(newSpecies) { //the setter can have only one parameter
       if(typeof newSpecies  == 'string') {
            this.species = newSpecies;
       } 
       else {
            throw new Error('The output is not valid');
       }
    }
}

const tiger = new Tiger('Felidae', 'Panthera tigris');

console.log(tiger.animalType);