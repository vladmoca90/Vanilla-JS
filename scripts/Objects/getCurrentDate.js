// Returns the current date in DD-MM-YYYY format

const getCurrentDate = () => {
  const today = new Date();

  return [
    String(today.getDate()).padStart(2, '0'),
    String(today.getMonth() + 1).padStart(2, '0'),
    today.getFullYear(),
  ].join('-');
};

console.log(getCurrentDate());
// Example output: 07-07-2026