const rectArea = function(width, height) {
    return width * height
};

console.log(rectArea(7, 4));


//Same function written with arrow functions
const rectArea = (width, height) => width * height;

console.log(rectArea(7, 4));