// A function that compares the length of two lists and returns the longest one

const longestList = (x, y) => {
  // Validate the arguments
  if (!Array.isArray(x) || !Array.isArray(y)) {
    throw new Error("Both arguments must be arrays.");
  }

  // Check that neither array is empty
  if (x.length === 0 || y.length === 0) {
    throw new Error("Neither array can be empty.");
  }

  // Return the first array if they are equal length
  return x.length >= y.length ? x : y;
};