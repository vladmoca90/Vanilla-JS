//Basic rules for dictionaries.

// You can use the build-in Object, such as newObject(); or the literal notation {};

let animalDict = {
    'bird': 'goose',
    'fish': 'shark',
    'insect': 'spider',
    'mammal': 'wolf',
    'reptile': 'monitor',
}

animalDict['bird'] = 'goose'; //using bracket.
animalDict.bird = 'goose'; //accessing the property by dot.

//When using Typescript make sure you write the data type as well. --> const dictionary: any = {}; (example)

//A dictionary can have a key and a value. --> const dictionary