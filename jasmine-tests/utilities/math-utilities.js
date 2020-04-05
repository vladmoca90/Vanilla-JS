const fibonacci = n => {
    if (n < 0) {
        throw new Error("n must be positive, greater or equal to 0.");
    }
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}