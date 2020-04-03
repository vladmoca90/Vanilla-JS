//A function that returns all the numbers divisible by m and n

function numbersDivisibleWithOr(n, m) {
    var count = 0;

    for (i = 1; i < 100; i++) {
        if (i % n == 0 || i % m == 0) {
            count++;
        }
    }

    return count;
}

//A function that returns all the numbers divisible by m up to n
function numbersDivisibleWithAnd(n, m) {
    var count = 0;

    for (i = 1; i < m; i++) {
        if (i % n == 0) {
            count++;
        }
    }

    return count;
}

//A function that returns the total of numbers with 3 digits up to m
function countNumbersBetweenInterval(n, m) {
    var count = 0;

    for (var i = 0; i < m; i++) {
        if(i >= n) {
            count++;
        }
    }

    return count;
}