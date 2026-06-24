/*
Exercise:
Calculate the total passenger cost, add the booking fee, and then apply the
percentage discount. For real payment systems, store money as integer pennies
to avoid floating-point rounding problems.
*/

function calculateTotal(booking) {
  // reduce() adds price multiplied by quantity for every passenger category.
  // The final 0 is the accumulator's starting value.
  const passengerTotal = booking.passengers.reduce(
    (total, passenger) => total + passenger.price * passenger.quantity,
    0
  );

  // ?? uses the fallback only when the value is null or undefined. A valid fee
  // of 0 therefore remains 0.
  const subtotal = passengerTotal + (booking.bookingFee ?? 0);
  const discountPercent = booking.discountPercent ?? 0;

  // Convert the percentage into a multiplier: a 10% discount becomes 0.9.
  // toFixed returns a string, so Number converts it back to a numeric value.
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

// £100 passengers + £5 fee = £105; minus 10% gives £94.50.
console.assert(result === 94.5);
console.assert(calculateTotal({ passengers: [], bookingFee: 0 }) === 0);
console.log("Booking total:", result);

