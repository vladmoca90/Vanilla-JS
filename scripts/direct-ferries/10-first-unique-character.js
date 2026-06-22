// Exercise: Return the first character that appears only once.

function firstUniqueCharacter(value) {
  const counts = new Map();

  for (const character of value) {
    counts.set(character, (counts.get(character) ?? 0) + 1);
  }

  for (const character of value) {
    if (counts.get(character) === 1) {
      return character;
    }
  }

  return null;
}

console.assert(firstUniqueCharacter("swiss") === "w");
console.assert(firstUniqueCharacter("aabb") === null);
console.assert(firstUniqueCharacter("") === null);
console.log("First unique character in 'swiss':", firstUniqueCharacter("swiss"));

