// Exercise: Find and correct the bugs in this function.
// Broken version:
// function getAvailable(sailings) {
//   return sailings
//     .filter(sailing => sailing.seats = 0)
//     .sort((a, b) => a.price > b.price);
// }

function getAvailable(sailings) {
  return sailings
    .filter(sailing => sailing.seats > 0)
    .sort((a, b) => a.price - b.price);
}

const sailings = [
  { id: "S1", seats: 3, price: 80 },
  { id: "S2", seats: 0, price: 40 },
  { id: "S3", seats: 2, price: 60 }
];

const result = getAvailable(sailings);
console.assert(result.map(sailing => sailing.id).join(",") === "S3,S1");
console.log("Available sailings:", result);

