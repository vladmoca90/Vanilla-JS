// A function that converts degrees into radians

const degreesToRadians = (degrees) => {
    if (degrees == null) {
        throw new Error("Value cannot be null or undefined.");
    }

    if (typeof degrees !== "number" || Number.isNaN(degrees)) {
        throw new TypeError("Value must be a valid number.");
    }

    return degrees * Math.PI / 180;
};

// Converts radians to degrees
const radiansToDegrees = (radians) => {
    if (radians == null) {
        throw new Error("Value cannot be null or undefined.");
    }

    if (typeof radians !== "number" || Number.isNaN(radians)) {
        throw new TypeError("Value must be a valid number.");
    }

    return radians * 180 / Math.PI;
};

// Examples

console.log(degreesToRadians(180)); // 3.141592653589793
console.log(degreesToRadians(90));  // 1.5707963267948966

console.log(radiansToDegrees(Math.PI));     // 180
console.log(radiansToDegrees(Math.PI / 2)); // 90