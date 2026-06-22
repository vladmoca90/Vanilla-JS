// Exercise: Calculate a total with quantities, a booking fee and a discount.
// In production, monetary values should usually be stored as integer pennies.

function calculateTotal(booking) {
  const passengerTotal = booking.passengers.reduce(
    (total, passenger) => total + passenger.price * passenger.quantity,
    0
  );

  const subtotal = passengerTotal + (booking.bookingFee ?? 0);
  const discountPercent = booking.discountPercent ?? 0;

  return Number((subtotal * (1 - discountPercent / 100)).toFixed(2));
}

const booking = {
  passengers: [
    { type: "adult", price: 40, quantity: 2 },
    { type: "child", price: 20, quantity: 1 }
  ],
  bookingFee: 5,
  discountPercent: 10
};

const result = calculateTotal(booking);
console.assert(result === 94.5);
console.assert(calculateTotal({ passengers: [], bookingFee: 0 }) === 0);
console.log("Booking total:", result);

