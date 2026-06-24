/*
Exercise:
Return only available sailings within the customer's budget. Sort them by
lowest price first, then by earliest departure when prices are equal.
*/

function filterSailings(sailings, maximumPrice) {
  return sailings
    // filter() creates a new array containing only matching records. Because it
    // creates a new array, the later sort does not reorder the original input.
    .filter(sailing => sailing.available && sailing.price <= maximumPrice)
    .sort((a, b) => {
      // A negative comparator result places a before b. Subtracting numeric
      // prices therefore produces ascending price order.
      if (a.price !== b.price) {
        return a.price - b.price;
      }

      // Equal prices use the parsed departure timestamp as the tie-breaker.
      return Date.parse(a.departure) - Date.parse(b.departure);
    });
}

// This data covers unavailable, over-budget and equal-price cases.
const sailings = [
  { id: "S1", available: true, price: 80, departure: "2026-06-24T10:00:00Z" },
  { id: "S2", available: true, price: 60, departure: "2026-06-24T12:00:00Z" },
  { id: "S3", available: false, price: 40, departure: "2026-06-24T08:00:00Z" },
  { id: "S4", available: true, price: 60, departure: "2026-06-24T09:00:00Z" },
  { id: "S5", available: true, price: 120, departure: "2026-06-24T07:00:00Z" }
];

const result = filterSailings(sailings, 100);

// S4 beats S2 on departure time; S3 and S5 are excluded.
console.assert(result.map(sailing => sailing.id).join(",") === "S4,S2,S1");
console.assert(sailings[0].id === "S1", "The original array should not be reordered");
console.log("Filtered sailings:", result);

