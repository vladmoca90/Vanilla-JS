const fact = (n) => {
    if (n < 0) {
        throw new Error("the n must be greater of equal to 0");
    }
    if (n == 0) {
        return 1;
    }

    return n*fact(n-1);
}