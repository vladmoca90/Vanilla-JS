//A function the creates an object

function createPerson(list) {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (var i = 0; i < list.length; i++) {
        var persons = {};

        persons.name = list[i][0];
        persons.age = list[i][1];
    }

    return persons;
}

createPerson([['Alexandru', 25]]);