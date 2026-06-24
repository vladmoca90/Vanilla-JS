/*
Exercise:
Return the cheapest available sailing for each route. When two sailings have
the same price, choose the one that departs first. Finally, order the selected
sailings by departure time.
*/

function getBestSailings(sailings) {
  // Fail early with a useful error if the function receives the wrong data type.
  if (!Array.isArray(sailings)) {
    throw new TypeError("sailings must be an array");
  }

  // A Map lets us store exactly one current "best" sailing for every route.
  // The route is the key and the full sailing object is the value.
  const bestByRoute = new Map();

  // Inspect each sailing once, making the selection part O(n).
  for (const sailing of sailings) {
    // Date.parse converts the date string into milliseconds for easy comparison.
    // If the date is invalid, it returns NaN.
    const departureTime = Date.parse(sailing && sailing.departure);

    // Ignore incomplete, unavailable or invalid records.
    if (
      !sailing ||
      !sailing.route ||
      sailing.seats <= 0 ||
      !Number.isFinite(sailing.price) ||
      Number.isNaN(departureTime)
    ) {
      continue;
    }

    // Look up the best sailing already found for this route, if one exists.
    const current = bestByRoute.get(sailing.route);

    // A sailing wins when it is the first for its route, is cheaper, or has
    // the same price but departs earlier.
    const isBetter =
      !current ||
      sailing.price < current.price ||
      (sailing.price === current.price &&
        departureTime < Date.parse(current.departure));

    if (isBetter) {
      bestByRoute.set(sailing.route, sailing);
    }
  }

  // Map.values() gives us the selected objects. Spread converts the iterator
  // into an array, which can then be sorted chronologically.
  return [...bestByRoute.values()].sort(
    (a, b) => Date.parse(a.departure) - Date.parse(b.departure)
  );
}

// Sample data includes an equal-price tie and a cheaper but sold-out sailing.
const sailings = [
  { id: "DF101", route: "Dover-Calais", departure: "2026-06-24T10:00:00Z", price: 85, seats: 4 },
  { id: "DF102", route: "Dover-Calais", departure: "2026-06-24T08:00:00Z", price: 85, seats: 2 },
  { id: "DF103", route: "Dover-Calais", departure: "2026-06-24T07:00:00Z", price: 70, seats: 0 },
  { id: "DF201", route: "Portsmouth-Caen", departure: "2026-06-24T12:00:00Z", price: 120, seats: 3 },
  { id: "DF202", route: "Portsmouth-Caen", departure: "2026-06-24T15:00:00Z", price: 110, seats: 5 }
];

const result = getBestSailings(sailings);

// console.assert reports a failure only when its condition is false.
console.assert(result.map(sailing => sailing.id).join(",") === "DF102,DF202");
console.assert(getBestSailings([]).length === 0);
console.log("Best sailings:", result);

