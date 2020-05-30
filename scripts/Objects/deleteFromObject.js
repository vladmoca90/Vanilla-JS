//A function that deletes a property from an object

const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryId: 0775,
    },
    {
        title: 'The Life of Walter Isaacson',
        author: 'Steve Jobs',
        libraryId: 4064,
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryId: 1919,
    }
];

const delLibraryId = library => {
    if(library.length == 0) {
        throw new Error('The list cannot be empty');
    }

    for (var i = 0; i < library.length; i++) {
        delete library[i].libraryId;
    }

    return library;
}