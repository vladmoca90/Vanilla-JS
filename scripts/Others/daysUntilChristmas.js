// Returns how many days are left until Christmas.

const returnDaysUntilChristmas = () => {
  const today = new Date();

  const isLeapYear =
    (today.getFullYear() % 4 === 0 && today.getFullYear() % 100 !== 0) ||
    today.getFullYear() % 400 === 0;

  const daysOfTheMonth = [
    31,
    isLeapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  let daysLeft = 25 - today.getDate();

  for (let i = today.getMonth() + 1; i < 11; i++) {
    daysLeft += daysOfTheMonth[i];
  }

  return daysLeft;
};

console.log(returnDaysUntilChristmas());