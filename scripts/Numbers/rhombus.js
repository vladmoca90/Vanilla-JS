// A function that calculates area and other things from rhombus

const calcAreaRhombus = (base, height) => {
    if (base == 0 || height == 0) {
        throw new Error('The shape is not a rhombus.');
    }

    return base * height;
}