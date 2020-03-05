const increaseNumbers = (n, x) => {
    while(n < 6) {
        n++;
        x =+ n;
    }

    return x;
}

increaseNumbers(1, 4);