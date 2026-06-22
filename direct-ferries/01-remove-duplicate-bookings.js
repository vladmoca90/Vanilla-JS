// Exercise: Keep only the most recently updated version of each booking.

function removeDuplicateBookings(bookings) {
  const latestById = new Map();

  for (const booking of bookings) {
    const current = latestById.get(booking.id);

    if (!current || Date.parse(booking.updatedAt) > Date.parse(current.updatedAt)) {
      latestById.set(booking.id, booking);
    }
  }

  return [...latestById.values()];
}

const bookings = [
  { id: "B1", status: "pending", updatedAt: "2026-06-20T10:00:00Z" },
  { id: "B2", status: "confirmed", updatedAt: "2026-06-20T11:00:00Z" },
  { id: "B1", status: "confirmed", updatedAt: "2026-06-20T12:00:00Z" }
];

const result = removeDuplicateBookings(bookings);
console.assert(result.length === 2);
console.assert(result.find(booking => booking.id === "B1").status === "confirmed");
console.log("Unique bookings:", result);

