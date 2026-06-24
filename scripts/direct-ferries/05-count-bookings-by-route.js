/*
Exercise:
Count the number of bookings made for each route and return an object such as
{ "Dover-Calais": 2, "Portsmouth-Caen": 1 }.
*/

function countBookingsByRoute(bookings) {
  // This object will map each route name to its running total.
  const counts = {};

  for (const booking of bookings) {
    // If the route is not present yet, ?? supplies 0. We then add one for the
    // current booking and save the updated count back onto the object.
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

// Bracket notation works with property names containing hyphens.
console.assert(result["Dover-Calais"] === 2);
console.assert(result["Portsmouth-Caen"] === 1);
console.log("Booking counts:", result);

