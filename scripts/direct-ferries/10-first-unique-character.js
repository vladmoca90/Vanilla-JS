// Exercise 10: First unique character
// Goal:
// Return the first character in a string that appears only once.
// This is a common plain JavaScript interview exercise.

function firstUniqueCharacter(value) {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string.");
  }

  if (value.length === 0) {
    return null;
  }

  const counts = new Map();

  for (const character of value) {
    counts.set(character, (counts.get(character) || 0) + 1);
  }

  for (const character of value) {
    if (counts.get(character) === 1) {
      return character;
    }
  }

  return null;
}

console.log(firstUniqueCharacter("openferry"));
console.assert(firstUniqueCharacter("openferry") === "o", "First unique character should be o.");
console.assert(firstUniqueCharacter("aabbcc") === null, "Should return null when no character is unique.");
console.assert(firstUniqueCharacter("") === null, "Should return null for an empty string.");

