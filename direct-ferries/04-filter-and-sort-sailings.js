// Exercise: Return available sailings within budget, ordered by price and time.

function filterSailings(sailings, maximumPrice) {
  return sailings
    .filter(sailing => sailing.available && sailing.price <= maximumPrice)
    .sort((a, b) => {
      if (a.price !== b.price) {
        return a.price - b.price;
      }

      return Date.parse(a.departure) - Date.parse(b.departure);
    });
}

const sailings = [
  { id: "S1", available: true, price: 80, departure: "2026-06-24T10:00:00Z" },
  { id: "S2", available: true, price: 60, departure: "2026-06-24T12:00:00Z" },
  { id: "S3", available: false, price: 40, departure: "2026-06-24T08:00:00Z" },
  { id: "S4", available: true, price: 60, departure: "2026-06-24T09:00:00Z" },
  { id: "S5", available: true, price: 120, departure: "2026-06-24T07:00:00Z" }
];

const result = filterSailings(sailings, 100);
console.assert(result.map(sailing => sailing.id).join(",") === "S4,S2,S1");
console.assert(sailings[0].id === "S1", "The original array should not be reordered");
console.log("Filtered sailings:", result);

