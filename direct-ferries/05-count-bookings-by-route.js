// Exercise: Count how many bookings exist for each route.

function countBookingsByRoute(bookings) {
  const counts = {};

  for (const booking of bookings) {
    counts[booking.route] = (counts[booking.route] ?? 0) + 1;
  }

  return counts;
}

const bookings = [
  { route: "Dover-Calais" },
  { route: "Portsmouth-Caen" },
  { route: "Dover-Calais" }
];

const result = countBookingsByRoute(bookings);
console.assert(result["Dover-Calais"] === 2);
console.assert(result["Portsmouth-Caen"] === 1);
console.log("Booking counts:", result);

