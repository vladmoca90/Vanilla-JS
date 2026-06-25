// Exercise 01: Remove duplicate bookings
// Goal:
// Given bookings that may contain the same booking id more than once,
// keep only the newest version of each booking.

function validateBooking(booking) {
  if (booking === null || typeof booking !== "object" || Array.isArray(booking)) {
    throw new TypeError("Each booking must be an object.");
  }

  if (typeof booking.id !== "string" || booking.id.trim() === "") {
    throw new TypeError("Each booking must have a non-empty string id.");
  }

  if (typeof booking.updatedAt !== "string" || Number.isNaN(Date.parse(booking.updatedAt))) {
    throw new TypeError("Each booking must have a valid updatedAt date string.");
  }
}

function removeDuplicateBookings(bookings) {
  if (!Array.isArray(bookings)) {
    throw new TypeError("bookings must be an array.");
  }

  const newestById = new Map();

  for (const booking of bookings) {
    validateBooking(booking);

    const existing = newestById.get(booking.id);

    // Keep this booking if we have not seen the id before,
    // or if this version was updated later than the existing one.
    if (!existing || Date.parse(booking.updatedAt) > Date.parse(existing.updatedAt)) {
      newestById.set(booking.id, booking);
    }
  }

  return [...newestById.values()];
}

const bookings = [
  { id: "DF100", passenger: "Vlad", updatedAt: "2026-06-01T10:00:00Z" },
  { id: "DF101", passenger: "Ana", updatedAt: "2026-06-01T11:00:00Z" },
  { id: "DF100", passenger: "Vlad", updatedAt: "2026-06-01T12:00:00Z", cabin: true },
];

const uniqueBookings = removeDuplicateBookings(bookings);
console.log(uniqueBookings);
console.assert(uniqueBookings.length === 2, "Should keep two unique booking ids.");
console.assert(uniqueBookings.find((b) => b.id === "DF100").cabin === true, "Should keep newest DF100.");

