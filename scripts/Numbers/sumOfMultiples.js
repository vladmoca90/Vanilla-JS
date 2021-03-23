const sumOfMultiples = n => {
    if(n <= 0) {
        throw new Error('The n must be positive and greater than 0');
    }

    let sum = 0;

    for (let i = 0; i < n; i++) {
        if(i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}

sumOfMultiples(100);

// Second verion of the function
const sumOfMultiples = n => {
    if(n <= 0) {
        throw new Error('The n must be positive and greater than 0');
    }

    let sum = 0;

    for (let i = 0; i < n; i++) {
        if(i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}