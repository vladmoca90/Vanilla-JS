const createPerson = list => {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    let person = new Object();

    for (let i = 0; i < list.length; i++) {
        person.name = list[i][0];
        person.age = list[i][1];
    }
    return person;
}

createPerson([['Alexandru', 25]]);