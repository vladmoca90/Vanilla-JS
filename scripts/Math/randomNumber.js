// A function that returns a random number between a certain interval

const randomNumber = (min, max) => {
    if (min > max) {
        throw new Error("The interval is invalid.");
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Example

randomNumber(1, 5);