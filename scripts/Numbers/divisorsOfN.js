//Given a number n, return a list with all the divisors of n

function findDivisors(n) {

    if (n <= 0) {
        throw new Error("The n must be positive only");
    }

    var divisors = [];

    divisors.push(1);

    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }

    return divisors;
}