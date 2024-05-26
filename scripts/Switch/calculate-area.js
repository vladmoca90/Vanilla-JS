// A function receives an object that contains the property "type"

// "type" can have circle, rectangle, square

// the function returns the area of the shape

const calculateArea = shape => {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.r * shape.r;
        case "square":
            return shape.l * shape.l;
        case "rectangle":
            return shape.l * shape.h;
        default:
            throw new Error("Shape not valid");
    }
}