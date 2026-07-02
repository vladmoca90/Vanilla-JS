// Returns the current date in DD-MM-YYYY format

const getCurrentDate = () => {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
};

console.log(getCurrentDate());
// Example output: 02-07-2026