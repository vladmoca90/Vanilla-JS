//Basic rules for dictionaries.

// Dictionaries are objects that have keys and value. --> const dictionary[key] = value;

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

//const dictionary: { [key: string]: string } = {}; (exact type of data)

//you can also use .map() on dictionaries --> const dictionary = new Map<string, number>()

//if you use dictionaries on union, enums or more complex data use the Record<Keys, Type> notation.

//example you have type JobInfo = { ... }  and type JobPosition = { ... }
//they can be included in a dictionary as const dictionary = new Map<JobInfo, JobPosition>()