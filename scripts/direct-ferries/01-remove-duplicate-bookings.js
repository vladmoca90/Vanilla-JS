/*
Exercise:
Remove duplicate booking IDs, keeping only the version with the newest
updatedAt timestamp.
*/

function removeDuplicateBookings(bookings) {
  // Each booking ID points to the newest booking seen for that ID.
  const latestById = new Map();

  for (const booking of bookings) {
    // get() returns undefined if this is the first record with this ID.
    const current = latestById.get(booking.id);

    // Replace the stored record only when there is no existing version or the
    // incoming version has a later timestamp.
    if (!current || Date.parse(booking.updatedAt) > Date.parse(current.updatedAt)) {
      latestById.set(booking.id, booking);
    }
  }

  // Convert the Map's values iterator back into a normal array.
  return [...latestById.values()];
}

const bookings = [
  { id: "B1", status: "pending", updatedAt: "2026-06-20T10:00:00Z" },
  { id: "B2", status: "confirmed", updatedAt: "2026-06-20T11:00:00Z" },
  { id: "B1", status: "confirmed", updatedAt: "2026-06-20T12:00:00Z" }
];

const result = removeDuplicateBookings(bookings);

// There should be two unique IDs and B1 should use its newest status.
console.assert(result.length === 2);
console.assert(result.find(booking => booking.id === "B1").status === "confirmed");
console.log("Unique bookings:", result);

