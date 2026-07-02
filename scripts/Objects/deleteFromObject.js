const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1775,
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

const deleteLibraryId = (books) => {
  if (!Array.isArray(books)) {
    throw new Error("Input must be an array.");
  }

  if (books.length === 0) {
    throw new Error("The list cannot be empty.");
  }

  return books.map(({ libraryId, ...book }) => book);
};

console.log(deleteLibraryId(library));

console.log(library); // Original array remains unchanged