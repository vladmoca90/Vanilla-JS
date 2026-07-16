// Returns how many days are left until Christmas.

const returnDaysUntilChristmas = () => {
  const today = new Date();

  let christmas = new Date(today.getFullYear(), 11, 25); // December = 11

  // If Christmas has already passed this year,
  // calculate until next year's Christmas.
  if (today > christmas) {
    christmas = new Date(today.getFullYear() + 1, 11, 25);
  }

  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  return Math.ceil((christmas - today) / millisecondsPerDay);
};

console.log(returnDaysUntilChristmas());