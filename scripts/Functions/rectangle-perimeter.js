const rectPerimeter = function(width, height) {
    return 2*width + 2*height
};

console.log(rectPerimeter(7, 4));


//Same function written with arrow functions
const rectPerimeter = (width, height) => 2*width + 2*height;

console.log(rectPerimeter(12, 8));