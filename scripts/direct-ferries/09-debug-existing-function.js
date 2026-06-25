// Exercise 09: Debug an existing function
// Goal:
// You may be shown broken code and asked to explain what is wrong.

// Broken version:
// function getAvailable(sailings) {
//   return sailings
//     .filter(sailing => sailing.seats)
//     .sort((a, b) => a.price > b.price);
// }
//
// Problems:
// 1. It does not validate the input.
// 2. `filter(sailing => sailing.seats)` relies on truthy/falsy values.
// 3. `sort((a, b) => a.price > b.price)` returns true/false, not a numeric sort value.

function validateSailing(sailing) {
  if (sailing === null || typeof sailing !== "object" || Array.isArray(sailing)) {
    throw new TypeError("Each sailing must be an object.");
  }

  if (!Number.isInteger(sailing.seats) || sailing.seats < 0) {
    throw new TypeError("Each sailing must have a non-negative integer seats value.");
  }

  if (typeof sailing.price !== "number" || !Number.isFinite(sailing.price) || sailing.price < 0) {
    throw new TypeError("Each sailing must have a valid non-negative numeric price.");
  }
}

function getAvailable(sailings) {
  if (!Array.isArray(sailings)) {
    throw new TypeError("sailings must be an array.");
  }

  sailings.forEach(validateSailing);

  return sailings
    .filter((sailing) => sailing.seats > 0)
    .sort((a, b) => a.price - b.price);
}

const sailings = [
  { id: 1, seats: 0, price: 50 },
  { id: 2, seats: 3, price: 80 },
  { id: 3, seats: 2, price: 60 },
];

const available = getAvailable(sailings);
console.log(available);
console.assert(available.length === 2, "Should keep only sailings with seats available.");
console.assert(available[0].id === 3, "Should sort available sailings by cheapest price.");

