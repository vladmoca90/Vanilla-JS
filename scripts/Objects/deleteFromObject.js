//A function that deletes a property from an object

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
    }
];

function deleteFromObj(library) {

    if (library.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (i = 0; i < library.length; i++) {
        delete library[i].libraryID;
    }

    return library;
}