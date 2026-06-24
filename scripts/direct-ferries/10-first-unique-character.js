/*
Exercise:
Return the first character that occurs exactly once in a string. Return null
when every character is repeated or the string is empty.
*/

function firstUniqueCharacter(value) {
  // Map stores a frequency count for each distinct character.
  const counts = new Map();

  // First pass: count every occurrence. ?? supplies zero for a new character.
  for (const character of value) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }

  // Second pass: travelling through the original string preserves its order,
  // allowing us to return the first character whose count is one.
  for (const character of value) {
    if (counts.get(character) === 1) {
      return character;
    }
  }

  // Reaching this point means no unique character was found.
  return null;
}

// "s" and "i" repeat, while "w" is the first character occurring once.
console.assert(firstUniqueCharacter("swiss") === "w");
console.assert(firstUniqueCharacter("aabb") === null);
console.assert(firstUniqueCharacter("") === null);
console.log("First unique character in 'swiss':", firstUniqueCharacter("swiss"));

