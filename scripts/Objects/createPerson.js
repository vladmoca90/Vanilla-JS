//A function that creates an object with the properties and values of a Person

const createPerson = list => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty.');
    }
    if (list.length == 1) {
        throw new Error('The list needs two elements.');
    }

    let person = new Object();

    for (let i = 0; i < list.length; i++) {
        person.name = list[0];
        person.age = list[1];
    }

    return person;
}

createPerson(['John Smith', 25]);