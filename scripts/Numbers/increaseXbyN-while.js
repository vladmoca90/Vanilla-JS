// A function that increases a number x by n

const increaseXbyN = n => {
    let x;

    while (n < 6) {
        n++;
        x = + n;
    }

    return x;
}

increaseXbyN(3);