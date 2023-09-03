//A function that calculates the area of a rectangle

const rectArea = (width, height) =>{
    if(width == 0 || height == 0) {
        throw new Error('The shape is not a rectangle.');
    }
    if(width == height) {
        throw new Error('The shape is not a rectangle, itis actually a square.');
    }

    return width * height;
};

console.log(rectArea(7, 4));