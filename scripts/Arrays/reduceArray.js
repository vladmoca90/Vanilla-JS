//The .reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function 
//for each value of the array (from left to right) and the return value of the function is stored in an accumulator. 

//Method is array.reduce(callback(accumulator, currentValue), initialValue)

const numbers = [1800, 50, 300, 20, 100];

let difference = numbers.reduce(
    (accumulator, currentValue) => accumulator - currentValue 
    // 1800 - 50 - 300 - 20 - 100 (the first element is the accumulator in this case)
    // currentValue represents all elements from the array
);

console.log(difference); // The result will be 1330