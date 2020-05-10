//A function that converts degrees into radians

const degreesIntoRadians = n => {
    if(n == null) {
        throw new Error('The number cannot be null');
    }
    if(n == 0) {
        return n;
    }

    let pi = Math.PI;
    let radian = n * (pi/180);

    return radian;
}

//A function that converts radians into degrees
const radiansIntoDegrees = n => {
    if(n == null) {
        throw new Error('The number cannot be null');
    }
    if(n == 0) {
        return n;
    }

    let pi = Math.PI;
    let degrees = n * (180/pi);

    return degrees;
}