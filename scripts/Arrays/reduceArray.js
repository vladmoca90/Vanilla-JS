//The reduce() method executes a reducer function on each element of the array and returns a single output value.
//Method is array.reduce(callback(accumulator, currentValue), initialValue)

const numbers = [1800, 50, 300, 20, 100];

let difference = numbers.reduce(
    (accumulator, currentValue) => accumulator - currentValue
);

console.log(difference); // The result will be 1330