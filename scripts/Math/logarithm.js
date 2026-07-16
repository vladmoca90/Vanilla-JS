// A function that calculates a logarithm

// Calculates the natural logarithm (ln)
const calcLog = (x) => {
  if (x <= 0) {
    throw new Error("Input must be greater than 0.");
  }

  return Math.log(x);
};