//A function the creates an object

function createObject(list) {
    if (list.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (var i = 0; i < list.length; i++) {
        var persons = new Object();

        persons.name = list[i];
        persons.age = list[i + 1];
    }

    return persons;
}

createObject(['Alexandru', 25]);