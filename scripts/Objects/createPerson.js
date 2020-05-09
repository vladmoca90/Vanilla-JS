//A function the creates an object

const createPerson = list => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (let i = 0; i < list.length; i++) {
        let persons = {};

        persons.name = list[i][0];
        persons.age = list[i][1];
    }

    return persons;
}

createPerson([['Alexandru', 25]]);