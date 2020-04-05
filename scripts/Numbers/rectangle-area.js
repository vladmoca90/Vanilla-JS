const rectArea = (width, height) =>{
    if(width == 0 || height == 0) {
        throw new Error('The shape is not a rectangle.');
    }

    return width * height;
};

console.log(rectArea(7, 4));