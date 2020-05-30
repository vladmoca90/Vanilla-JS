const fibonacci = n => {
    if(n < 0) {
        throw new Error("n must be positive or 0 only!");
    }
    if(n == 0) {
        return 1;
    }
    if(n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}