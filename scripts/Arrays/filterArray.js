// List of names
const names = [
  'Ana',
  'Vlad',
  'Alex',
  'James',
  'Thomas',
  'Fiona',
  'Anastasia',
  'Zachary',
  'Ian'
];

/**
 * Returns all names that start with the given letter.
 *
 * @param {string[]} names - Array of names.
 * @param {string} letter - Letter to filter by.
 * @returns {string[]} Filtered array of names.
 */
const filterNames = (names, letter) => {
  // Validate the names argument
  if (!Array.isArray(names)) {
    throw new TypeError('The first argument must be an array.');
  }

  // Validate the letter argument
  if (typeof letter !== 'string') {
    throw new TypeError('The letter must be a string.');
  }

  // Remove surrounding spaces
  letter = letter.trim();

  // Ensure exactly one character was provided
  if (letter.length !== 1) {
    throw new Error('Please provide a single letter.');
  }

  // Convert to uppercase for case-insensitive comparison
  const searchLetter = letter.toUpperCase();

  return names.filter(name => {
    // Ignore non-string values
    if (typeof name !== 'string') {
      return false;
    }

    return name.toUpperCase().startsWith(searchLetter);
  });
};

// Test cases
console.log(filterNames(names, 'A'));
// ['Ana', 'Alex', 'Anastasia']

console.log(filterNames(names, 'a'));
// ['Ana', 'Alex', 'Anastasia']

console.log(filterNames(names, 'J'));
// ['James']

console.log(filterNames(names, 'T'));
// ['Thomas']

console.log(filterNames(names, ' Z '.trim()));
// ['Zachary']

console.log(filterNames(names, 'I'));
// ['Ian']