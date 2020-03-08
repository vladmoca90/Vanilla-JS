function returnMultiples() {
    if(n <= 0) {
        throw new Error('The number must be positive and greater than 0');
    }

    var sum = 0;

    for(var n = 0; n < 1000; n++) {
        if(n % 3 == 0) {
            sum += n;
        }

        return sum;
    }
}

returnMultiples();