//Write a JavaScript program that display the book title with true status

const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
    }
];

const bookStatus = library => {
    if (library.length == 0) {
        throw new Error('The list cannot be empty');
    }

    let status = [];

    for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus == true) {
            status.push(Object.values(library[i]));
        }
    }

    return status;
}

bookStatus(library);