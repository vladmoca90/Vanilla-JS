//The .reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function 
//for each value of the array (from left to right) and the return value of the function is stored in an accumulator. 

//General form is like this:
//array.reduce(callbackFn, initialValue); //callbackFn is called reducer and the initialValue is an optional one

//Example
const num = [1800, 50, 300, 20, 100];

let difference = num.reduce(
    (accumulator, currentValue) => accumulator - currentValue
    // 1800 - 50 - 300 - 20 - 100 (the first element is the accumulator in this case)
    // currentValue represents all elements from the array.
);

console.log(difference); // The result will be 1330



//Another example, but without .reduce()
const numbers = [1, -1, 2, 3];
let sum = 0;

for (let n of numbers) {
    sum += n;
}

console.log(sum); //will display 5 as it will add all the elements => 1 - 1 + 2 + 3 = 5

//Same example with .reduce()
const total = numbers.reduce((accumulator, currentValue) => { //accumulator is like the above sum variable.
    return accumulator + currentValue
}, 0); //The 0 value is initial value for the accumulator.

console.log(total); //5