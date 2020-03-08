function sumOfMultiples(n) {
    var sum = 0;

    for (var i = 0; i < n; i++) {
        if (i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}

sumOfMultiples(100);


// Second verion of the function

const sumOfMultiples = n => {
    var sum = 0;

    for (var i = 0; i < n; i++) {
        if (i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}