/*
Exercise:
Find and fix the bugs in a function intended to return available sailings in
ascending price order.
*/

// Broken version:
// function getAvailable(sailings) {
//   return sailings
//     .filter(sailing => sailing.seats = 0)
//     .sort((a, b) => a.price > b.price);
// }

/*
Problems in the broken version:
1. `=` assigns 0 to seats instead of comparing a value.
2. An available sailing should have more than zero seats, not zero seats.
3. A sort comparator should return a negative number, zero, or a positive
   number. The expression `a.price > b.price` returns only true or false.
*/

function getAvailable(sailings) {
  return sailings
    // Keep only records with at least one available seat.
    .filter(sailing => sailing.seats > 0)
    // Subtraction is the standard numeric ascending sort comparator.
    .sort((a, b) => a.price - b.price);
}

const sailings = [
  { id: "S1", seats: 3, price: 80 },
  { id: "S2", seats: 0, price: 40 },
  { id: "S3", seats: 2, price: 60 }
];

const result = getAvailable(sailings);

// S2 is sold out; S3 is cheaper than S1.
console.assert(result.map(sailing => sailing.id).join(",") === "S3,S1");
console.log("Available sailings:", result);

