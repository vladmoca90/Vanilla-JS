// Exercise 05: Count bookings by route
// Goal:
// Turn an array of bookings into an object showing how many bookings each route has.

function validateBooking(booking) {
  if (booking === null || typeof booking !== "object" || Array.isArray(booking)) {
    throw new TypeError("Each booking must be an object.");
  }

  if (typeof booking.route !== "string" || booking.route.trim() === "") {
    throw new TypeError("Each booking must have a non-empty string route.");
  }
}

function countBookingsByRoute(bookings) {
  if (!Array.isArray(bookings)) {
    throw new TypeError("bookings must be an array.");
  }

  const counts = {};

  for (const booking of bookings) {
    validateBooking(booking);

    // If the route has not appeared yet, start at zero before adding one.
    counts[booking.route] = (counts[booking.route] || 0) + 1;
  }

  return counts;
}

const bookings = [
  { id: "A", route: "Dover-Calais" },
  { id: "B", route: "Dover-Calais" },
  { id: "C", route: "Portsmouth-Caen" },
];

const counts = countBookingsByRoute(bookings);
console.log(counts);
console.assert(counts["Dover-Calais"] === 2, "Dover-Calais should have two bookings.");
console.assert(counts["Portsmouth-Caen"] === 1, "Portsmouth-Caen should have one booking.");

