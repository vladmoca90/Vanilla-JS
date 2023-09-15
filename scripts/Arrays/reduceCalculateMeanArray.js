//A function that calculates the mean of the numbers in an array using .reduce()

const numbers = [1, 2, 4, 7, 9, 15, 16];

//Method 1 - classical way of writing the calculus.
const averageNumb = () => {
    const sum = numbers.reduce((accumulator, number) => {
        accumulator += number;
        return accumulator;
    }, 0);
    
    //the accumulator is 0 (the second argument) and to this number we will add each number in the array. 
    //just like creating let sum = 0; without using .reduce()

    return (sum/numbers.length); //will be 7.714285714285714 (use .toFixed() for example to have only 7.71)
}

//Method 2 - simplified
const averageNumb2 = () => {
     const sum = numbers.reduce((accumulator, number) => accumulator + number);
 
     return (sum/numbers.length); //will also be 7.714285714285714
 }