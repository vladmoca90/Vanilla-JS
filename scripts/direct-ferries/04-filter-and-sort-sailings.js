// Exercise 04: Filter and sort sailings
// Goal:
// Return only available sailings under a maximum price,
// sorted by cheapest price first, then earliest departure.

function validateSailing(sailing) {
  if (sailing === null || typeof sailing !== "object" || Array.isArray(sailing)) {
    throw new TypeError("Each sailing must be an object.");
  }

  if (typeof sailing.available !== "boolean") {
    throw new TypeError("Each sailing must have an available boolean.");
  }

  if (typeof sailing.price !== "number" || !Number.isFinite(sailing.price) || sailing.price < 0) {
    throw new TypeError("Each sailing must have a valid non-negative numeric price.");
  }

  if (typeof sailing.departure !== "string" || Number.isNaN(Date.parse(sailing.departure))) {
    throw new TypeError("Each sailing must have a valid departure date string.");
  }
}

function filterSailings(sailings, maximumPrice) {
  if (!Array.isArray(sailings)) {
    throw new TypeError("sailings must be an array.");
  }

  if (typeof maximumPrice !== "number" || !Number.isFinite(maximumPrice) || maximumPrice < 0) {
    throw new TypeError("maximumPrice must be a valid non-negative number.");
  }

  sailings.forEach(validateSailing);

  return sailings
    .filter((sailing) => sailing.available && sailing.price <= maximumPrice)
    .sort((a, b) => {
      if (a.price !== b.price) return a.price - b.price;
      return Date.parse(a.departure) - Date.parse(b.departure);
    });
}

const sailings = [
  { id: 1, price: 100, available: true, departure: "2026-07-01T12:00:00Z" },
  { id: 2, price: 70, available: true, departure: "2026-07-01T14:00:00Z" },
  { id: 3, price: 60, available: false, departure: "2026-07-01T09:00:00Z" },
  { id: 4, price: 70, available: true, departure: "2026-07-01T08:00:00Z" },
];

const filtered = filterSailings(sailings, 80);
console.log(filtered);
console.assert(filtered.length === 2, "Should return two available sailings under 80.");
console.assert(filtered[0].id === 4, "Same price should sort by earliest departure.");

