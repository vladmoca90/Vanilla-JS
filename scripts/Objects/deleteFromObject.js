// Original array
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
  },
];

// Returns a new array without the libraryId property
const removeLibraryId = (books) => {
  if (!Array.isArray(books)) {
    throw new TypeError('Input must be an array.');
  }

  if (books.length === 0) {
    throw new Error('The array cannot be empty.');
  }

  return books.map(({ libraryId, ...bookWithoutId }) => bookWithoutId);
};

// Create a new array without libraryId
const updatedLibrary = removeLibraryId(library);

console.log(updatedLibrary);
/*
[
  { title: 'The Road Ahead', author: 'Bill Gates' },
  { title: 'The Life of Walter Isaacson', author: 'Steve Jobs' },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins'
  }
]
*/

// Original array remains unchanged
console.log(library);
/*
[
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1775
  },
  {
    title: 'The Life of Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4064
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 1919
  }
]