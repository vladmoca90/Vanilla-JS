// Write a JavaScript program that displays the titles
// of all books with a reading status of true.

const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    }
];

const bookStatus = (library) => {
    // Validate the array
    if (!library || library.length === 0) {
        throw new Error("The library cannot be empty.");
    }

    const books = [];

    // Loop through every book
    for (let i = 0; i < library.length; i++) {

        // Only include books that have been read
        if (library[i].readingStatus) {
            books.push(library[i].title);
        }
    }

    return books;
};

console.log(bookStatus(library));