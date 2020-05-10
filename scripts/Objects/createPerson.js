//A function the creates an object

const createPerson = list => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }
    if (list.length == 1) {
        return person.name = list[0];
    }

    for (let i = 0; i < list.length; i++) {
        let person = {};

        person.name = list[i][0];
        person.age = list[i][1];
    }

    return person;
}