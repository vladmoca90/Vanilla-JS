// Exercise 03: Calculate booking total
// Goal:
// Calculate the final price of a booking from passengers, booking fee, and discount.

function validatePassenger(passenger) {
  if (passenger === null || typeof passenger !== "object" || Array.isArray(passenger)) {
    throw new TypeError("Each passenger must be an object.");
  }

  if (!Number.isInteger(passenger.quantity) || passenger.quantity < 0) {
    throw new TypeError("Passenger quantity must be a non-negative integer.");
  }

  if (typeof passenger.price !== "number" || !Number.isFinite(passenger.price) || passenger.price < 0) {
    throw new TypeError("Passenger price must be a valid non-negative number.");
  }
}

function validateBooking(booking) {
  if (booking === null || typeof booking !== "object" || Array.isArray(booking)) {
    throw new TypeError("booking must be an object.");
  }

  if (!Array.isArray(booking.passengers)) {
    throw new TypeError("booking.passengers must be an array.");
  }

  booking.passengers.forEach(validatePassenger);

  if (typeof booking.bookingFee !== "number" || !Number.isFinite(booking.bookingFee) || booking.bookingFee < 0) {
    throw new TypeError("bookingFee must be a valid non-negative number.");
  }

  if (typeof booking.discount !== "number" || !Number.isFinite(booking.discount) || booking.discount < 0) {
    throw new TypeError("discount must be a valid non-negative number.");
  }
}

function calculateTotal(booking) {
  validateBooking(booking);

  const passengerTotal = booking.passengers.reduce((total, passenger) => {
    return total + passenger.quantity * passenger.price;
  }, 0);

  const totalBeforeDiscount = passengerTotal + booking.bookingFee;
  const totalAfterDiscount = totalBeforeDiscount - booking.discount;

  // Do not return a negative customer total if the discount is larger than the subtotal.
  const safeTotal = Math.max(0, totalAfterDiscount);

  // Return a number rounded to two decimals.
  return Number(safeTotal.toFixed(2));
}

const booking = {
  passengers: [
    { type: "adult", quantity: 2, price: 45 },
    { type: "child", quantity: 1, price: 25 },
  ],
  bookingFee: 5,
  discount: 10,
};

const total = calculateTotal(booking);
console.log(total);
console.assert(total === 110, "Total should be 110.");

