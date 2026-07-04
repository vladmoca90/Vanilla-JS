// A function that increases a number x by n using a while loop

const increaseXbyN = (x, n) => {
  let count = 0;

  while (count < n) {
    x++;
    count++;
  }

  return x;
};

console.log(increaseXbyN(3, 4)); // 7
console.log(increaseXbyN(10, 5)); // 15
console.log(increaseXbyN(20, 0)); // 20