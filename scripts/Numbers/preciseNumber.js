//Calculate the precise value of a given number
function preciseNumber(n, p) {
    if(n < 0) {
        throw new Error("Then number must be greater than 0");
    }
    if(n == 0) {
        return 0;
    }

    m = n.toPrecision(p);

    return m;
}