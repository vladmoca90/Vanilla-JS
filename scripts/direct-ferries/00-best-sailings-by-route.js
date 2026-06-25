// Exercise 00: Best sailings by route
// Goal:
// Given a list of ferry sailings, choose the best available sailing for each route.
// "Best" means:
// 1. Cheapest price first.
// 2. If prices are equal, choose the earliest departure.

function validateSailing(sailing) {
  // Validate that each item is a real object.
  if (sailing === null || typeof sailing !== "object" || Array.isArray(sailing)) {
    throw new TypeError("Each sailing must be an object.");
  }

  // A route is needed so we know what group this sailing belongs to.
  if (typeof sailing.route !== "string" || sailing.route.trim() === "") {
    throw new TypeError("Each sailing must have a non-empty string route.");
  }

  // Price must be a real number. NaN and Infinity are not useful prices.
  if (typeof sailing.price !== "number" || !Number.isFinite(sailing.price) || sailing.price < 0) {
    throw new TypeError("Each sailing must have a valid non-negative numeric price.");
  }

  // The date must be parseable by JavaScript.
  if (typeof sailing.departure !== "string" || Number.isNaN(Date.parse(sailing.departure))) {
    throw new TypeError("Each sailing must have a valid departure date string.");
  }

  // Available should be a boolean so the code does not guess from truthy/falsy values.
  if (typeof sailing.available !== "boolean") {
    throw new TypeError("Each sailing must have an available boolean.");
  }
}

function getBestSailings(sailings) {
  // Validate the outer input first.
  if (!Array.isArray(sailings)) {
    throw new TypeError("sailings must be an array.");
  }

  const bestByRoute = new Map();

  for (const sailing of sailings) {
    validateSailing(sailing);

    // Ignore unavailable sailings because customers cannot book them.
    if (!sailing.available) continue;

    const currentBest = bestByRoute.get(sailing.route);

    // If this is the first available sailing for the route, keep it.
    if (!currentBest) {
      bestByRoute.set(sailing.route, sailing);
      continue;
    }

    const isCheaper = sailing.price < currentBest.price;
    const isSamePriceButEarlier =
      sailing.price === currentBest.price &&
      Date.parse(sailing.departure) < Date.parse(currentBest.departure);

    if (isCheaper || isSamePriceButEarlier) {
      bestByRoute.set(sailing.route, sailing);
    }
  }

  // Return the chosen sailings in departure order.
  return [...bestByRoute.values()].sort(
    (a, b) => Date.parse(a.departure) - Date.parse(b.departure)
  );
}

const sailings = [
  { route: "Dover-Calais", price: 80, departure: "2026-07-01T09:00:00Z", available: true },
  { route: "Dover-Calais", price: 75, departure: "2026-07-01T12:00:00Z", available: true },
  { route: "Portsmouth-Caen", price: 120, departure: "2026-07-01T08:00:00Z", available: false },
  { route: "Portsmouth-Caen", price: 130, departure: "2026-07-01T10:00:00Z", available: true },
];

const result = getBestSailings(sailings);
console.log(result);
console.assert(result.length === 2, "Should return one best sailing per available route.");
console.assert(result[0].route === "Dover-Calais", "Dover-Calais should come first by departure.");
console.assert(result[0].price === 75, "Should pick the cheapest Dover-Calais sailing.");

