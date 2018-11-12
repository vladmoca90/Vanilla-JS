//A function that returns the total of Hammning numbers up to 1000 (or any other limit)

function returnTotalOfHamming(n, m, p) {

    var count = 0;

    for (i = 0; i < 1000; i++) {
        if (i % n == 0 || i % m == 0 || i % p == 0) {
            count++;
        }
    }

    return count;
}