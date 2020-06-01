//A function that receives an list of numbers and returns and object with the following properties:
//the sum of all numbers, the product of all numbers and if the value 0 exists or not. 
/*
{
    sum: 15,
    product: 12,
    hasZero: false
}
*/
const calculateProperties = list => {
    if(list.length == 0) {
        throw new Error("The list is empty");
    }
    if(list.length == 1) {
        return {
            sum: list[0],
            product: list[0],
            hasZero: list[0] == 0
        }
    }

    let sum = 0;
    let product = 1;

    for (let i = 0; i < list.length; i++) {
        sum += list[i];
        product *= list[i];
    }

    return {
        sum: sum,
        product: product,
        hasZero: product == 0
    };
}