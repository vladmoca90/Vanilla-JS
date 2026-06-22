// Exercise: Return the cheapest available sailing for each route.
// If two sailings have the same price, choose the earliest departure.

function getBestSailings(sailings) {
  if (!Array.isArray(sailings)) {
    throw new TypeError("sailings must be an array");
  }

  const bestByRoute = new Map();

  for (const sailing of sailings) {
    const departureTime = Date.parse(sailing && sailing.departure);

    if (
      !sailing ||
      !sailing.route ||
      sailing.seats <= 0 ||
      !Number.isFinite(sailing.price) ||
      Number.isNaN(departureTime)
    ) {
      continue;
    }

    const current = bestByRoute.get(sailing.route);
    const isBetter =
      !current ||
      sailing.price < current.price ||
      (sailing.price === current.price &&
        departureTime < Date.parse(current.departure));

    if (isBetter) {
      bestByRoute.set(sailing.route, sailing);
    }
  }

  return [...bestByRoute.values()].sort(
    (a, b) => Date.parse(a.departure) - Date.parse(b.departure)
  );
}

const sailings = [
  { id: "DF101", route: "Dover-Calais", departure: "2026-06-24T10:00:00Z", price: 85, seats: 4 },
  { id: "DF102", route: "Dover-Calais", departure: "2026-06-24T08:00:00Z", price: 85, seats: 2 },
  { id: "DF103", route: "Dover-Calais", departure: "2026-06-24T07:00:00Z", price: 70, seats: 0 },
  { id: "DF201", route: "Portsmouth-Caen", departure: "2026-06-24T12:00:00Z", price: 120, seats: 3 },
  { id: "DF202", route: "Portsmouth-Caen", departure: "2026-06-24T15:00:00Z", price: 110, seats: 5 }
];

const result = getBestSailings(sailings);
console.assert(result.map(sailing => sailing.id).join(",") === "DF102,DF202");
console.assert(getBestSailings([]).length === 0);
console.log("Best sailings:", result);

